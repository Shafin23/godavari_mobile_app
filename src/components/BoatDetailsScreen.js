import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have react-native-vector-icons installed

const BoatDetailsScreen = () => {
    const navigation = useNavigation(); // To navigate back

    const images = [
        "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
        "https://thumbs.dreamstime.com/z/vintage-wooden-boat-15892636.jpg?w=450",
        "https://i1.wp.com/plugboats.com/wp-content/uploads/2021/05/Elwood-electric-woodenboat.jpg?resize=768%2C427&ssl=1"
    ];

    return (
        <View style={styles.container}>
            {/* Back Icon */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Image Slider Section */}
            <View style={styles.imageContainer}>
                <Swiper
                    style={styles.swiper}
                    showsPagination={true}
                    autoplay={true}
                    autoplayTimeout={3}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                >
                    {images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.image} />
                    ))}
                </Swiper>
            </View>

            {/* Content Section */}
            <ScrollView style={styles.content}>
                {/* Title and Description */}
                <Text style={styles.title}>Haritha Boating Service</Text>
                <Text style={styles.description}>
                    The boat features air-conditioned cabins, plush seating, and an onboard dining area
                    serving delicious local cuisine.
                </Text>
                <Text style={styles.dateInfo}>Wed, Jun20 - 2 Passengers</Text>

                {/* Amenities Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Amenities</Text>
                    <Text style={styles.listItem}>• Clean Restrooms</Text>
                    <Text style={styles.listItem}>• Comfortable Sitting arrangements</Text>
                    <Text style={styles.listItem}>• Onboarding Dining</Text>
                </View>

                {/* Safety Features Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Safety Features</Text>
                    <Text style={styles.listItem}>• Live jackets provided to all passengers</Text>
                    <Text style={styles.listItem}>• Emergency medical kit onboard</Text>
                </View>

                {/* Special Notes Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Special notes</Text>
                    <Text style={styles.listItem}>• Please arrive 30 minutes before departure.</Text>
                    <Text style={styles.listItem}>• Carry a valid ID for verification.</Text>
                </View>
            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("TicketScreen")}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 15,
        zIndex: 10, // Ensures it overlays other content
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 8,
    },
    imageContainer: {
        width: '100%',
        height: 200,
    },
    swiper: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    dot: {
        backgroundColor: '#ddd',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#FFC107',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 3,
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    dateInfo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    listItem: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    continueButton: {
        backgroundColor: '#fdd951',
        paddingVertical: 15,
        borderRadius: 25,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#836702',
    },
});

export default BoatDetailsScreen;
