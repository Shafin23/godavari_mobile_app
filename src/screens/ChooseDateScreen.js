import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AppContext } from '../context/AppContext';


const ChooseDateScreen = ({ navigation }) => {
//  context api---------------------------------------------
  const {bookingDate,setBookingDate} = useContext(AppContext)

  const handleConfirm = () => {
    if (bookingDate) {
      console.log(`Selected Date from datepicker component: ${bookingDate}`);
      navigation.navigate("SinglePageAppication")
      // Navigate to the next screen or perform another action
    } else {
      alert('Please select a date!');
    }
  };

  return (
    <View style={styles.container}>


      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => setBookingDate(day.dateString)}
          markedDates={{
            [bookingDate]: {
              selected: true,
              selectedColor: '#007BFF',
            },
          }}
          theme={{
            arrowColor: '#007BFF',
            todayTextColor: '#007BFF',
          }}
        />
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#007BFF',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'start',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#fdd951',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#836702',
  },
});

export default ChooseDateScreen;
