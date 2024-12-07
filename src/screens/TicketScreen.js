import React, { useContext, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import TicketInfo from '../components/TicketInfo';
import Icon from 'react-native-vector-icons/Ionicons';
import PassengerDetails from '../components/PassengerDetails';
import { AppContext } from '../context/AppContext';

const TicketScreen = ({ navigation }) => {
    const { totalPassenger } = useContext(AppContext); // Get the totalPassenger count
    const [passengerData, setPassengerData] = useState([]);

    // Initialize passengerData state dynamically based on totalPassenger
    useEffect(() => {
        const initialData = Array.from({ length: totalPassenger }, () => ({
            name: '',
            age: '',
            gender: '',
        }));
        setPassengerData(initialData);
    }, [totalPassenger]); // Update whenever totalPassenger changes

    const handleNameChange = (name, index) => {
        const updatedData = [...passengerData];
        updatedData[index - 1].name = name;
        setPassengerData(updatedData);
    };

    const handleAgeChange = (age, index) => {
        const updatedData = [...passengerData];
        updatedData[index - 1].age = age;
        setPassengerData(updatedData);
    };

    const handleGenderChange = (gender, index) => {
        const updatedData = [...passengerData];
        updatedData[index - 1].gender = gender;
        setPassengerData(updatedData);
    };

    const handleContinue = () => {
        navigation.navigate("AddOns")
        // Validate the data
        const incompleteData = passengerData.some(
            (passenger) => !passenger.name || !passenger.age || !passenger.gender
        );

        if (incompleteData) {
            Alert.alert('Validation Error', 'Please fill in all passenger details.');
        } else {
            console.log('Passenger Data:', passengerData);
            Alert.alert('Continue', 'Passenger details submitted.');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Ticket Info Section */}
                <TicketInfo
                    serviceName="Haritha Boating Service"
                    startTime="10:00 AM"
                    endTime="4:00 PM"
                    location={{ start: 'Bhadrachalam', end: 'Pali Hills' }}
                    seats={totalPassenger}
                    shouldShowSeatAndPrice={true}
                />

                {/* Notification Section */}
                <View style={styles.notificationContainer}>
                    <Text style={styles.notificationText}>
                        Your ticket information will be sent on this number
                    </Text>
                    <View style={styles.row}>
                        <View style={styles.innerRow}>
                            <Icon name="person" size={20} color="white" style={styles.seatIcon} />
                            <Text style={styles.phoneNumber}>+91 9876543210</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Edit pressed')}>
                            <Text style={styles.editButton}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.passengerDetails}>
                    <Text style={styles.passengerDetailsText}>
                        Passenger Details
                    </Text>
                    {/* Passenger Details Section */}
                    {passengerData.map((_, index) => (
                        <PassengerDetails
                            key={index}
                            passengerNumber={index + 1}
                            onNameChange={handleNameChange}
                            onAgeChange={handleAgeChange}
                            onGenderChange={handleGenderChange}
                            totalPassenger={totalPassenger}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    notificationContainer: {
        backgroundColor: '#ff6666',
        padding: 20,
        margin: 10,
        borderRadius: 14,
    },
    notificationText: {
        color: 'white',
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    innerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    phoneNumber: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 2,
    },
    editButton: {
        fontSize: 16,
        color: '#ff6666',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 22,
        paddingVertical: 8,
    },
    continueButton: {
        backgroundColor: '#fdd951',
        paddingVertical: 15,
        margin: 20,
        borderRadius: 25,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#836702',
    },
    seatIcon: {
        marginRight: 5,
    },
    passengerDetails: {
        backgroundColor: "white",
        margin: 10,
        padding: 20,
        borderRadius: 15,
        borderWidth: 1, // Border width
        borderColor: "#d3d3d3", // Light gray color for border
        // Shadow for iOS
        shadowColor: "gray", // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Offset for shadow
        shadowOpacity: 0.25, // Opacity of shadow
        shadowRadius: 3.84, // Blur radius
        // Shadow for Android
        elevation: 5, // Elevation to create shadow on Android
    },

    passengerDetailsText: {
        fontSize: 28,
        color: "#2b2939",
        fontWeight: "bold",
        marginBottom: 15
    }
});

export default TicketScreen;
