import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const BoatCard = ({ images, title, description, price, seats }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BoatDetailsScreen")}>
      {/* Image Slider Section */}
      <View style={styles.sliderContainer}>
        <Swiper
          style={styles.wrapper}
          showsPagination={true}
          autoplay={true}
          autoplayTimeout={3}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </Swiper>
        <View style={styles.seatsContainer}>
          <Text style={styles.seatsText}>{seats} seats</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
  },
  sliderContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  seatsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  seatsText: {
    color: '#333',
    fontWeight: 'bold',
  },
  details: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BoatCard;
