import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';



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

      <View style={StyleSheet.create({ paddingHorizontal: 20 })}>
        <Text style={styles.heading}>Verify Mobile Number</Text>
        <Text style={styles.subheading}>
          An OTP has been sent to {phoneNumber}.
          {'\n'}Please enter the OTP below to sign in.
        </Text>

        {/* otp and resend button */}
        <View style={StyleSheet.create({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "start" })}>
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
            style={isResendDisabled ? styles.resendOTP : styles.enabledButton}
            disabled={isResendDisabled}
            onPress={() => {
              alert('OTP Resent!');
              setTimer(120); // Reset timer
              setIsResendDisabled(true);
            }}
          >
            <Text style={isResendDisabled ? styles.resetText : styles.enabledButtonText} >Resend</Text>
          </TouchableOpacity>
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
            Resend OTP in <Text style={StyleSheet.create({ color: "#c59b02" })}>{formatTimer()}</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SinglePageAppication")}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SinglePageAppication")}>
          <Text style={styles.editNumber}>Incorrect mobile number? <Text style={StyleSheet.create({ color: "#c59b02", fontWeight:"bold" })}>Edit now</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'start',
    color: "#494755"
  },
  subheading: {
    fontSize: 14,
    color: '#4f4b68',
    marginBottom: 20,
    textAlign: 'start',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start"

  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#836702',
  },
  editNumber: {
    fontSize: 14,
    color: '#66627b',
    textAlign: "center",
  },
  resendOTP: {
    backgroundColor: "#f2f7fd",
    borderRadius: 10,
    marginLeft: 10,
    height: 48,
    paddingHorizontal: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  enabledButton: {
    backgroundColor: "#97c6f3",
    borderRadius: 10,
    marginLeft: 10,
    height: 48,
    paddingHorizontal: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  enabledButtonText: {
    color: "#13375b",
    fontWeight: "bold"
  },
  resetText: {
    color: "#d1d0dd",
    fontWeight: "bold"
  }
});

export default OtpVerificationScreen;
