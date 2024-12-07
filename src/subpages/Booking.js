import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import ActiveTab from "../components/ActiveTab";
import InactiveTab from "../components/InacvtiveTab";
import { Image } from "react-native";


// Sample data for Past Bookings (Active bookings will be shown in the ActiveTab component)
const pastBookings = [
    {
        id: "2",
        serviceName: "Haritha Boating Service",
        time: "7:00 AM - 3:00 PM",
        passenger: "2 Seats",
        name: "John Doe",
        phone: "9876543210",
        bookingId: "ABCD123456",
        status: "Cancelled",
        refundStatus: "Refunded",
    },
    {
        id: "3",
        serviceName: "Haritha Boating Service",
        time: "7:00 AM - 3:00 PM",
        passenger: "2 Seats",
        name: "John Doe",
        phone: "9876543210",
        bookingId: "ABCD123456",
        status: "Completed",
    },
];

// Reusable Ticket Card Component
const TicketCard = ({ ticket }) => (
    <View style={styles.ticketCard}>
        <Text style={styles.serviceName}>{ticket.serviceName}</Text>
        <Text style={styles.time}>{ticket.time}</Text>
        <Text style={styles.details}>Name: {ticket.name}</Text>
        <Text style={styles.details}>Phone No: {ticket.phone}</Text>
        <Text style={styles.details}>Passenger: {ticket.passenger}</Text>
        <Text style={styles.details}>Booking ID: {ticket.bookingId}</Text>
        {ticket.refundStatus && (
            <Text style={styles.refundStatus}>Refund Status: {ticket.refundStatus}</Text>
        )}
    </View>
);

const Booking = () => {
    const [activeTab, setActiveTab] = useState("Active");

    const renderContent = () => {
        if (activeTab === "Active") {
            return <ActiveTab />; // Render the ActiveTab component
        }

        else {
            return <InactiveTab/>
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/boat.png')} style={styles.image} />
            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "Active" && styles.activeTab]}
                    onPress={() => setActiveTab("Active")}
                >
                    <Text style={activeTab === "Active" ? styles.activeTabText : styles.tabText}>
                        Active
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "Past Booking" && styles.activeTab]}
                    onPress={() => setActiveTab("Past Booking")}
                >
                    <Text
                        style={activeTab === "Past Booking" ? styles.activeTabText : styles.tabText}
                    >
                        Past Booking
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Render ActiveTab or Past Bookings */}
            <View style={styles.ticketContainer}>{renderContent()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#eafcfc",
        borderRadius: 30, // Rounded tabs
        padding: 4,
        marginBottom: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 20, // Rounded corners for tabs
    },
    activeTab: {
        backgroundColor: "#007BFF", // Active tab color
    },
    tabText: {
        color: "#000",
        fontWeight: "600",
    },
    activeTabText: {
        color: "#fff",
        fontWeight: "600",
    },
    ticketContainer: {
        flex: 1,
    },
    ticketCard: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    time: {
        fontSize: 14,
        marginBottom: 4,
        color: "#6c757d",
    },
    details: {
        fontSize: 14,
        marginBottom: 4,
        color: "#6c757d",
    },
    refundStatus: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#28a745",
    },
});

export default Booking;
