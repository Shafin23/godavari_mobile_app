import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import TicketInfo from '../components/TicketInfo';
import ServiceItem from '../components/ServiceItem';
import Insurence from '../components/Insurence';
import ServiceSection from '../components/ServiceSection';




const AddOns = ({ navigation }) => {
    const { totalPassenger } = useContext(AppContext);

    const handleAddService = (service) => {
        console.log(`Added: ${service}`);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollingContainer}>
                <TicketInfo
                    serviceName="Haritha Boating Service"
                    startTime="10:00 AM"
                    endTime="4:00 PM"
                    location={{ start: 'Bhadrachalam', end: 'Pali Hills' }}
                    seats={totalPassenger}
                    totalTicketPrice={2500}
                    margin={0}
                    shouldShowSeatAndPrice={true}
                    containerPadding={40}
                />

                <Text style={StyleSheet.create({ fontSize: 30, fontWeight: "bold", marginTop: 30, marginBottom:5 })}>Additional services</Text>
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


                {/* insurence */}
                <Insurence/>


            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("BillBreakdown")}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollingContainer: {
        padding: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    serviceSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    sectionDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
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
    dashedLine: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#CCC',
        marginVertical: 15,
    },
});

export default AddOns;

