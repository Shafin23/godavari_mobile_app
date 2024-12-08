import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashedLine from '../components/DashedLine';

const ItineraryItem = ({ title, details }) => {
    return (
        <View style={styles.itineraryItem}>
            <Text style={styles.title}>{title}</Text>
            <View style={StyleSheet.create({ width: "80%" })}>
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
                <DashedLine containerPadding={65} />
            </View>
        </View>
    );
};

const ItineraryOwnRide = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate("CancellationPolicyScreen")
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
        paddingHorizontal: 30,
        paddingTop: 25,

    },
    itineraryItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
        position: "relative"

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        marginRight: 10,
        width: "20%",
        position: 'relative',
        right: 5

    },
    content: {
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        width: "90%",
        backgroundColor: '#E7F0FA',
        borderRadius: 8,
        padding: 15,
        width:"100%"
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
        backgroundColor: '#fdd951',
        paddingVertical: 15,
        margin: 20,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#836702',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ItineraryOwnRide;
