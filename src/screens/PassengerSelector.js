import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import DashedLine from '../components/DashedLine';

const PassengerSelector = ({ navigation }) => {
  const { setTotalPassenger, adultCount, setAdultCount, childCount, setChildCount } = useContext(AppContext);

  const increment = (type) => {
    if (type === 'adult') {
      setAdultCount(adultCount + 1);
    } else {
      setChildCount(childCount + 1);
    }
    setTotalPassenger((prev) => prev + 1);
  };

  const decrement = (type) => {
    if (type === 'adult' && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (type === 'child' && childCount > 0) {
      setChildCount(childCount - 1);
    }
    setTotalPassenger((prev) => prev - 1);
  };

  const handleAddPassengers = () => {
    console.log(`Added ${adultCount} Adults and ${childCount} Children`);
    navigation.navigate('SinglePageAppication');
  };

  return (
    <View style={styles.container}>
      <View>
        {/* Adult Section */}
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Adult</Text>
            <Text style={styles.price}>From: ₹1,500</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={() => decrement('adult')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{adultCount}</Text>
            <TouchableOpacity style={styles.button} onPress={() => increment('adult')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DashedLine />
        {/* Child Section */}
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Child (age 3 - 10)</Text>
            <Text style={styles.price}>From: ₹1,000</Text>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={() => decrement('child')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{childCount}</Text>
            <TouchableOpacity style={styles.button} onPress={() => increment('child')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DashedLine />
      </View>

      <View>
        {/* Add Passengers Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddPassengers}>
          <Text style={styles.addButtonText}>
            Add {adultCount + childCount} Passenger
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  price: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    textAlign: 'start',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120, // Reduced oval width
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 20, // Smaller oval border radius
    paddingHorizontal: 8,
    height: 40, // Reduced height for smaller oval
  },
  button: {
    width: 30, // Reduced button size
    height: 30, // Reduced button size
    borderRadius: 15, // Circular buttons
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24, // Increased size of "+" and "-"
    fontWeight: 'bold',
    color: '#5c5c5c',
  },
  count: {
    marginHorizontal: 10,
    fontSize: 20, // Increased size of the number
    fontWeight: 'bold',
    color: '#5c5c5c',
  },
  addButton: {
    backgroundColor: '#fdd951',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#836702',
  },
});

export default PassengerSelector;
