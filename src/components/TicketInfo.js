import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // Get the screen width

const TicketInfo = ({ serviceName, startTime, endTime, location, seats }) => {
    // Calculate the number of dashes dynamically based on the screen width
    const dashCount = Math.floor(width / 14); // Adjust this value to control dash size and spacing

    return (
        <View style={styles.ticketInfoContainer}>
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
                    <View style={styles.centerDashedLine}>
                        {Array.from({ length: dashCount / 2.5 }).map((_, index) => (
                            <View key={index} style={styles.dash} />
                        ))}
                    </View>

                    {/* Boat Icon */}
                    <Icon name="boat" size={30} color="#007BFF" style={styles.boatIcon} />
                </View>

                {/* End Time and Location */}
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{endTime}</Text>
                    <Text style={styles.locationText1}>{location.end}</Text>
                </View>
            </View>

            {/* Bottom Custom Dashed Line */}
            <View style={styles.bottomDashedLine}>
                {Array.from({ length: dashCount }).map((_, index) => (
                    <View key={index} style={styles.dash} />
                ))}
            </View>

            {/* Seats Info */}
            <View style={styles.rowSeats}>
                <Icon name="person" size={20} color="#333" style={styles.seatIcon} />
                <Text style={styles.seatsText}>{seats} Seats</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ticketInfoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        margin: 10,
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
        fontWeight:"bold",
        textAlign:"elft"
    },
    locationText1: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        fontWeight:"bold",
        textAlign:"right",
        
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
        left:"10%",
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
        marginTop: 10,
    },
    seatIcon: {
        marginRight: 5,
    },
    seatsText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    }
});

export default TicketInfo;
