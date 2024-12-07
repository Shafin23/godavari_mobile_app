import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import TicketInfo from '../components/TicketInfo';

// Reusable Component for Individual Services
const ServiceItem = ({ title, price, onPress, buttonText = '+' }) => {
    return (
        <View style={styles.serviceItem}>
            <View>
                <Text style={styles.serviceTitle}>{title}</Text>
                {price && <Text style={styles.servicePrice}>₹ {price}</Text>}
            </View>
            <TouchableOpacity style={styles.serviceButton} onPress={onPress}>
                <Text style={styles.serviceButtonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

// Reusable Component for Grouping Services
const ServiceSection = ({ title, description, children }) => {
    return (
        <View style={styles.serviceSection}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {description && <Text style={styles.sectionDescription}>{description}</Text>}
            {children}
            <View style={styles.dashedLine} />
        </View>
    );
};

const AddOns = ({navigation}) => {
    const { totalPassenger } = useContext(AppContext);

    const handleAddService = (service) => {
        console.log(`Added: ${service}`);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <TicketInfo
                    serviceName="Haritha Boating Service"
                    startTime="10:00 AM"
                    endTime="4:00 PM"
                    location={{ start: 'Bhadrachalam', end: 'Pali Hills' }}
                    seats={totalPassenger}
                />

                {/* Transportation Options */}
                <ServiceSection
                    title="Transportation Options"
                    description="Cab service pickUp and dropOff near Bhadrachalam Temple; driver details will be shared via WhatsApp and SMS."
                >
                    <ServiceItem
                        title="Private Car (4 Seater)"
                        price="500"
                        onPress={() => handleAddService('Private Car (4 Seater)')}
                    />
                    <ServiceItem
                        title="Private Car (7 Seater)"
                        price="500"
                        onPress={() => handleAddService('Private Car (7 Seater)')}
                    />
                    <ServiceItem
                        title="Shared Rides"
                        price="500"
                        onPress={() => handleAddService('Shared Rides')}
                    />
                </ServiceSection>

                {/* Meal Selection */}
                <ServiceSection title="Meal Selection">
                    <ServiceItem
                        title="Breakfast & Snacks"
                        price="500"
                        buttonText="Add"
                        onPress={() => handleAddService('Breakfast & Snacks')}
                    />
                    <ServiceItem
                        title="Pure Veg Lunch"
                        price="500"
                        buttonText="Add"
                        onPress={() => handleAddService('Pure Veg Lunch')}
                    />
                    <ServiceItem
                        title="Non Veg Lunch"
                        price="500"
                        buttonText="Add"
                        onPress={() => handleAddService('Non Veg Lunch')}
                    />
                </ServiceSection>

                {/* Other Recommendations */}
                <ServiceSection title="Other Recommendations">
                    <ServiceItem
                        title="Tour Guide"
                        price="1,500"
                        onPress={() => handleAddService('Tour Guide')}
                    />
                </ServiceSection>

                {/* Insurance */}
                <ServiceSection
                    title="Insurance"
                    description="At just ₹ 50 per passenger get: Insurance Coverage, Upto ₹ 70,000 on hospitalization & Upto ₹ 5,00,000 in case of Death/PTD"
                >
                    <ServiceItem
                        title="Insurance"
                        onPress={() => handleAddService('Insurance')}
                    />
                </ServiceSection>
            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("BillBreakdown")}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    serviceSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    sectionDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    serviceTitle: {
        fontSize: 16,
        color: '#333',
    },
    servicePrice: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    serviceButton: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },
    serviceButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    continueButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 15,
        margin:        20,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    dashedLine: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#CCC',
        marginVertical: 15,
    },
});

export default AddOns;

