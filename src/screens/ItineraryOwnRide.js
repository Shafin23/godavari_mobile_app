import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItineraryItem = ({ title, details }) => {
    return (
        <View style={styles.itineraryItem}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Icon name="boat" size={24} color="#007BFF" />
                </View>
                <View style={styles.detailsContainer}>
                    {details.map((detail, index) => (
                        <Text key={index} style={styles.details}>
                            {detail}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const ItineraryOwnRide = () => {
    const handlePress = () => {
        console.log('Continue pressed');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Reach Section */}
                <ItineraryItem
                    title="Reach"
                    details={[
                        '9:00 AM : Reach boating point.',
                        'Utilize our Google Maps link or ask our team about destination guidance.',
                    ]}
                />
                <View style={styles.dashedLine} />

                {/* Boating Point Section */}
                <ItineraryItem
                    title="Boating Point"
                    details={[
                        '9:00 AM - 10:00 AM',
                        '• Onboarding',
                        '• Verification',
                        '• Breakfast',
                    ]}
                />
                <View style={styles.dashedLine} />

                {/* Pali Hills Section */}
                <ItineraryItem
                    title="Pali Hills"
                    details={[
                        '10:00 AM : Boating to Pali Hills.',
                        '11:15 AM : Visit the Shiv Temple and explore the surroundings.',
                        '12:30 PM - 1:30 PM : Lunch will be served on the boat.',
                        'Enjoy the scenic beauty of the Godavari River. Participate in activities: Dancing, Live Karaoke.',
                    ]}
                />
                <View style={styles.dashedLine} />

                {/* Return Journey Section */}
                <ItineraryItem
                    title="Return Journey"
                    details={[
                        '4:00 PM : Return to the starting point.',
                        '4:00 PM - 5:30 PM : Off-boarding.',
                        '4:30 PM - 5:00 PM : Meet your cab driver.',
                        '5:00 PM - 7:00 PM : Return from Pochavaram to Bhadrachalam.',
                    ]}
                />
            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itineraryItem: {
        backgroundColor: '#E7F0FA',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconContainer: {
        marginRight: 15,
        marginTop: 5, // Aligns the icon to the text
    },
    detailsContainer: {
        flex: 1,
    },
    details: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 5,
    },
    dashedLine: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#CCC',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        margin: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ItineraryOwnRide;
