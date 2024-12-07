import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const OtpVerificationScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']); // Store OTP in an array
  const [isResendDisabled, setIsResendDisabled] = useState(true); // For resend button state
  const [timer, setTimer] = useState(120); // Resend OTP timer

  const phoneNumber = route.params?.phoneNumber || '+91XXXXXXXXXX';

  // Timer for Resend OTP
  React.useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false); // Enable the Resend OTP button when timer ends
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Update OTP inputs
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Verify OTP
  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      alert(`Verifying OTP: ${enteredOtp}`);
    } else {
      alert('Please enter a 4-digit OTP');
    }
  };

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/boat.png')} style={styles.image} />
      <Text style={styles.heading}>Verify Mobile Number</Text>
      <Text style={styles.subheading}>
        An OTP has been sent to {phoneNumber}.
        {'\n'}Please enter the OTP below to sign in.
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.resendButton, { opacity: isResendDisabled ? 0.5 : 1 }]}
        disabled={isResendDisabled}
        onPress={() => {
          alert('OTP Resent!');
          setTimer(120); // Reset timer
          setIsResendDisabled(true);
        }}
      >
        <Text style={styles.resendText}>
          {isResendDisabled ? `Resend OTP in ${formatTimer()}` : 'Resend OTP'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SinglePageAppication")}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("SinglePageAppication")}>
        <Text style={styles.editNumber}>Incorrect mobile number? Edit now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 10,
    textAlign: 'start',
  },
  subheading: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '70%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    width: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  resendButton: {
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#836702',
  },
  editNumber: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default OtpVerificationScreen;
