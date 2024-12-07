import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/landing.png')} style={styles.image} />
      <Text style={styles.title}>Explore the beauty of Godavari River</Text>
      <Text style={styles.subtitle}>
        Book your ride now and enjoy stunning landscapes and tranquil waters
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EnterNumber')} // Navigate to EnterNumber screen
      >
        <Text style={styles.buttonText}>Book a experience →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: 300,
    height:500
  },
  title: {
    marginTop:10,
    fontSize: 32,
    paddingLeft:15,
    paddingRight:15,
    fontWeight: 'bold',
    textAlign: 'start',
  },
  subtitle: {
    fontSize: 16,
    paddingLeft:15,
    paddingRight:15,
    textAlign: 'start',
    color: '#4f4b68',
    marginVertical: 7,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    width:"90%",
    marginLeft:15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#836702',
  },
});

export default LandingScreen;
