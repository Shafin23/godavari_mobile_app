import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';


const Home = () => {
  const { totalPassenger, bookingDate, adultCount, childCount } = useContext(AppContext)
  const navigation = useNavigation();
  const [selectedPlace, setSelectedPlace] = useState('Pochavaram boating point'); // Default place

  // Predefined coordinates for the places
  const placeCoordinates = {
    "Pochavaram boating point": { latitude: 16.8066, longitude: 81.6736 },
    "Rajahmundry boating point": { latitude: 17.0052, longitude: 81.7774 },
    "Papikondalu boating point": { latitude: 17.4306, longitude: 81.4984 },
  };



  const selectedCoordinates = placeCoordinates[selectedPlace];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Top Image */}
        <Image source={require('../../assets/images/home.png')} style={styles.image} />

        {/* Place Selector Dropdown */}
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedPlace}
            onValueChange={(itemValue) => setSelectedPlace(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Pochavaram boating point" value="Pochavaram boating point" />
            <Picker.Item label="Rajahmundry boating point" value="Rajahmundry boating point" />
            <Picker.Item label="Papikondalu boating point" value="Papikondalu boating point" />
          </Picker>
        </View>

        {/* Date Selector */}
        <TouchableOpacity
          style={styles.selectorItem}
          onPress={() => navigation.navigate("ChooseDateScreen")}
        >
          <Text style={styles.selectorIcon}>📅</Text>
          <Text style={styles.selectorText}>{bookingDate ? bookingDate : "Select Date"}</Text>
        </TouchableOpacity>

        {/* Passenger Selector */}
        <TouchableOpacity
          style={styles.selectorItem}
          onPress={() => navigation.navigate("PassengerSelector")}
        >
          <Text style={styles.selectorIcon}>👤</Text>
          <Text style={styles.selectorText}>{totalPassenger ? `Adult ${adultCount}, Children ${childCount}` : "Select passenger"}</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Booking Point Location</Text>

        <TouchableOpacity
          style={(totalPassenger > 0 && bookingDate) ? styles.button : styles.disabledButton}
          onPress={() => navigation.navigate('BoatListScreen')}
          disabled={!(totalPassenger > 0 && bookingDate)} // Corrected condition
        >
          <Text style={(totalPassenger > 0 && bookingDate) ? styles.buttonText : styles.disabledButtonText}>
            See available boats
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
    backgroundColor: "white",
  },
  heading: {
    textAlign: "left", // Corrected from "start"
    fontSize: 20,
    fontWeight: "bold",
    width: "90%",
    alignSelf: "center", // Replace margin: "0 auto"
    marginTop: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '90%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  selectorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  selectorIcon: {
    fontSize: 18,
    color: '#007BFF',
    marginRight: 10,
  },
  selectorText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  mapContainer: {
    width: '90%',
    height: 160,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#836702',
  },
  disabledButton: {
    backgroundColor: '#feefb8',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    width: "90%",
  },
  disabledButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fddf72',
  },
});

export default Home;
