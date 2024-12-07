import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import

const PassengerDetails = ({ passengerNumber, onNameChange, onAgeChange, onGenderChange }) => {
    const [gender, setGender] = useState('Male'); // Default gender

    return (
        <View style={styles.passengerDetailsContainer}>
            {/* Passenger Title */}
            <Text style={styles.passengerTitle}>Passenger {passengerNumber}</Text>

            {/* Name Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    placeholderTextColor="#A3A3A3"
                    onChangeText={(value) => onNameChange(value, passengerNumber)}
                />
                <Text style={styles.helperText}>Enter name as per Aadhar</Text>
            </View>

            {/* Age and Gender Section */}
            <View style={styles.row}>
                {/* Age Input */}
                <View style={styles.inputContainerSmall}>
                    <Text style={styles.label}>Age</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter age"
                        placeholderTextColor="#A3A3A3"
                        keyboardType="numeric"
                        onChangeText={(value) => onAgeChange(value, passengerNumber)}
                    />
                </View>

                {/* Gender Dropdown */}
                <View style={styles.inputContainerSmall}>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => {
                                setGender(itemValue);
                                onGenderChange(itemValue, passengerNumber);
                            }}
                            style={styles.picker}
                            dropdownIconColor="#A3A3A3" // Optional: Customize dropdown arrow
                        >
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    passengerDetailsContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal:11,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    passengerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
        color: '#333333',
        backgroundColor: '#F9F9F9',
    },
    helperText: {
        fontSize: 12,
        color: '#A3A3A3',
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainerSmall: {
        flex: 1,
        marginRight: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        backgroundColor: '#F9F9F9',
        overflow: 'hidden',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        overflow: 'hidden',
        height: 45, // Set a proper height for alignment
        justifyContent: 'center', // Center align the text
        backgroundColor: '#F9F9F9',
    },
    picker: {
        paddingHorizontal: 10, // Adds padding inside the picker
        color: '#333333',
        height: 150,
        fontSize:40
    }    
});

export default PassengerDetails;
