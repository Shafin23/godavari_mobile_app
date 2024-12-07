import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import BoatCard from '../components/BoatCard';

const BoatListScreen = () => {
    // Sample data for the boat cards
    const boats = [
        {
            id: 1,
            images: [
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg"
                
            ],
            title: "Haritha Boating Service",
            description: "Trip starts by 7:10 AM from Bhadrachalam to Pali Hills & journey ends by around 1:00 AM.",
            price: "₹ 1,500 / Adult",
            seats: "40",
        },
        {
            id: 2,
            images: [
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg"
            ],
            title: "Luxury Boating Experience",
            description: "Experience serenity with this luxury boat ride in backwaters.",
            price: "₹ 2,000 / Adult",
            seats: "20",
        },
        {
            id: 3,
            images: [
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg",
                "https://stonecroft.b-cdn.net/wp-content/uploads/2016/04/wooden-boat.jpg"
            ],
            title: "Evening Sunset Cruise",
            description: "Watch the sunset as you cruise the scenic river.",
            price: "₹ 2,500 / Adult",
            seats: "15",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.heading}>
                <Text style={styles.headingText}>Showing available boats</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {boats.map((boat) => (
                    <BoatCard
                        key={boat.id}
                        images={boat.images}
                        title={boat.title}
                        description={boat.description}
                        price={boat.price}
                        seats={boat.seats}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the SafeAreaView takes full screen space
        backgroundColor: 'white',
    },
    heading: {
        padding: 20,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headingText: {
        fontSize: 20,
        color: '#2b2939',
        fontWeight: 'bold',
    },
    scrollContent: {
        padding: 10, // Adds spacing around the scrollable content
    },
});

export default BoatListScreen;
