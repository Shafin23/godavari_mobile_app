import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const EnterNumberScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

    // Check if the phone number is valid (10 digits typed by the user)
  const isPhoneNumberValid = phoneNumber.length === 10;

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/boat.png')} style={styles.image} />
      <Text style={styles.heading}>Create Account or Sign in</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, '').slice(0, 10))} // Allow only numbers and limit to 10 digits
        />
      </View>
      <TouchableOpacity
        style={[styles.button, !isPhoneNumberValid && styles.buttonDisabled]}
        disabled={!isPhoneNumberValid}
        onPress={() => navigation.navigate('OtpVerification')}
      >
        <Text style={styles.buttonText}>Generate OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '90%',
  },
  prefix: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc', // Lighter color for disabled button
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default EnterNumberScreen;
