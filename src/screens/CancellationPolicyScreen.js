import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CancellationCard from '../components/CancellationCard';



// Main Cancellation Policy Screen
const CancellationPolicyScreen = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.screen}>
            <ScrollView>
                <CancellationCard heading="Cancellation from your end" textArray={["90% Refund: If canceled more than 5 days before the scheduled tour date.", "50% Refund: If canceled 3 to 5 days before the scheduled tour date.", "No Refund: If canceled within 1 day of the scheduled tour date."]} />

                <CancellationCard
                    heading="Cancellation from our end "
                    textArray={[
                        "Explanation: Sometimes, due to unforeseen circumstances like bad weather or safety concerns, we may need to cancel the tour."
                    ]}
                />

                <CancellationCard
                    heading="Refund Structure"
                    textArray={[
                        "95% Refund: If the tour is canceled by us. ",
                        "Note: Booking fees are non-refundable in all cases."
                    ]}

                />


                {/* Custom Checkbox */}
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                        onPress={() => setIsChecked(!isChecked)} // Toggle state on press
                    >
                        {isChecked && <Text style={styles.checkmark}>✔</Text>}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>I have read & agree with the Cancellation Policy.</Text>
                </View>
            </ScrollView>


            <TouchableOpacity
                style={isChecked ? styles.button : styles.buttonDisabled}
                onPress={() => navigation.navigate('Payment')} // Navigate to EnterNumber screen
                disabled={!isChecked}
            >
                <Text style={isChecked ? styles.buttonText : styles.disabledButtonText}>Book a experience →</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 10
    },
    button: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
        width: "90%",
        marginLeft: 15
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#836702',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
        marginLeft: 20

    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#FF6F61',
        borderColor: '#FF6F61',
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#555',
    },
    disabledButtonText: {
        color: "#fddf72",
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDisabled: {
        backgroundColor: '#feefb8', // Lighter color for disabled button
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
        width: "90%",
        marginLeft: 15
    },
});

export default CancellationPolicyScreen;
