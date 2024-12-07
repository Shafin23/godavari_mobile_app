import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashedLine from './DashedLine';

const TicketInfo = ({ margin = 10, serviceName, startTime, endTime, location, seats, totalTicketPrice = false }) => {

    return (
        <View style={[styles.ticketInfoContainer, { margin }]}>
            {/* Service Name */}
            <Text style={styles.serviceName}>{serviceName}</Text>

            {/* Time and Location Row with Dashed Line */}
            <View style={styles.row}>
                {/* Start Time and Location */}
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{startTime}</Text>
                    <Text style={styles.locationText}>{location.start}</Text>
                </View>

                {/* Dashed Line Across the Boat Icon */}
                <View style={styles.centerContainer}>
                    <View style={StyleSheet.create({ position: "absolute" })}><DashedLine containerPadding={130} /></View>
                    {/* Boat Icon */}
                    <Icon name="boat" size={30} color="#007BFF" style={styles.boatIcon} />
                </View>

                {/* End Time and Location */}
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{endTime}</Text>
                    <Text style={styles.locationText1}>{location.end}</Text>
                </View>
            </View>

            {/* dash line */}
            <View style={StyleSheet.create({ marginLeft: 5 })}><DashedLine containerPadding={30} /></View>

            {/* Seats Info */}
            <View style={styles.priceHolder}>
                <View style={styles.rowSeats}>
                    <Icon name="person" size={20} color="#333" style={styles.seatIcon} />
                    <Text style={styles.seatsText}>{seats} Seats</Text>
                </View>
                <View >
                    {totalTicketPrice && <Text style={styles.priceText}>₹ {totalTicketPrice}</Text>}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ticketInfoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    serviceName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: 15,
    },

    timeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    locationText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        fontWeight: "bold",
        textAlign: "elft"
    },
    locationText1: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        fontWeight: "bold",
        textAlign: "right",

    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    centerDashedLine: {
        flexDirection: 'row',
        position: 'absolute',
        top: '30%',
        left: "5%",
        transform: [{ translateY: -0.5 }],
        zIndex: 0,
        width: '100%',
        alignItems: 'center',
    },
    boatIcon: {
        zIndex: 1,
        backgroundColor: '#FFFFFF', // Optional: Add a white background to make the icon more visible
    },
    bottomDashedLine: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        marginVertical: 10,
    },
    dash: {
        width: 8, // Width of each dash
        height: 1, // Thickness of each dash
        backgroundColor: '#BEBEBE',
        marginRight: 4, // Space between dashes
    },
    rowSeats: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    seatIcon: {
        marginRight: 5,
    },
    seatsText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    priceHolder: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 20

    }
});

export default TicketInfo;
