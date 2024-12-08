import React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
      />

      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Booking Cancellation in Progress</Text>
        <Text style={styles.description}>
          Your cancellation request is being processed. Refunds will be
          initiated within the next 2-3 business days. Thank you for your
          patience.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SinglePageAppication')} // Navigate to EnterNumber screen
      >
        <Text style={styles.buttonText}>Return to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: "100%",
    // height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#836702',
  },
});

export default SplashScreen;
