import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import TicketInfo from '../components/TicketInfo';
import Insurence from '../components/Insurence';
import DashedLine from '../components/DashedLine';
import ServiceSection from '../components/ServiceSection';
import ServiceItem from '../components/ServiceItem';

const BillBreakDown = ({ navigation }) => {
    const { totalPassenger } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Ticket Info */}
                <TicketInfo
                    serviceName="Haritha Boating Service"
                    startTime="10:00 AM"
                    endTime="4:00 PM"
                    location={{ start: 'Bhadrachalam', end: 'Pali Hills' }}
                    seats={totalPassenger}
                    totalTicketPrice={2500}
                />


                <View style={StyleSheet.create({paddingHorizontal:15})}>
                    <ServiceSection
                        title="Other Recommendations"
                    >
                        <ServiceItem
                            title="Tour Guide"
                            price="1,500"
                            onPress={() => handleAddService('Private Car (4 Seater)')}
                        />
                    </ServiceSection>
                </View>


                {/* Insurence */}
                <View style={StyleSheet.create({ paddingHorizontal: 15 })}><Insurence marginBottom={10} /></View>
                <DashedLine />

                {/* Bill Breakdown Section */}
                <View style={styles.billBreakdownSection}>
                    <Text style={styles.sectionTitle}>Bill Breakdown</Text>

                    {/* Passenger Breakdown */}
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>
                            <Text style={styles.icon}>👤</Text> 2 Passenger
                        </Text>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.subRowText}>• Adult 1</Text>
                        <Text style={styles.subRowPrice}>₹ 1,500</Text>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.subRowText}>• Child 1 (age 3 - 10)</Text>
                        <Text style={styles.subRowPrice}>₹ 1,000</Text>
                    </View>

                    {/* Transportation */}
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>Transportation</Text>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.subRowText}>• Private Car</Text>
                        <Text style={styles.subRowPrice}>₹ 500</Text>
                    </View>

                    {/* Meals */}
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>Meal</Text>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.subRowText}>• Breakfast & Snacks</Text>
                        <Text style={styles.subRowPrice}>₹ 500</Text>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.subRowText}>• Pure Veg Lunch</Text>
                        <Text style={styles.subRowPrice}>₹ 500</Text>
                    </View>

                    {/* GST */}
                    <View style={styles.dashedLine} />
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>GST</Text>
                        <Text style={styles.rowPrice}>₹ 400</Text>
                    </View>

                    {/* Total */}
                    <View style={styles.row}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalPrice}>₹ 4,400</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Footer Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("ItineraryOwnRide")}>
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
    billBreakdownSection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    rowPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    subRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        paddingLeft: 20, // Indentation for sub-items
    },
    subRowText: {
        fontSize: 14,
        color: '#666',
    },
    subRowPrice: {
        fontSize: 14,
        color: '#666',
    },
    dashedLine: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#CCC',
        marginVertical: 10,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    continueButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 15,
        margin: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    icon: {
        fontSize: 16,
        color: '#007BFF',
    },
});

export default BillBreakDown;
