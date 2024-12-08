import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ActiveTab from "../components/ActiveTab";
import InactiveTab from "../components/InacvtiveTab";
import { Image } from "react-native";
import { AppContext } from "../context/AppContext";
import NoTicket from "../components/NoTicket";
import DownLoadTicket from "../components/DownloadTicket";

const Booking = () => {
    const [activeTab, setActiveTab] = useState("Active");
    const { viewBoardingPass, setViewBoardingPass } = useContext(AppContext);

    // Reset viewBoardingPass when the component loses focus
    useFocusEffect(
        React.useCallback(() => {
            // No action on focus, but cleanup on blur
            return () => {
                setViewBoardingPass(false);
            };
        }, [setViewBoardingPass])
    );

    const renderContent = () => {
        if (activeTab === "Active" && !viewBoardingPass) {
            return <ActiveTab />; // Render the ActiveTab component
        } else if (activeTab === "Active" && viewBoardingPass) {
            return <DownLoadTicket/>;
        } else {
            return <InactiveTab />;
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
                    onPress={() => {
                        setActiveTab("Past Booking");
                        setViewBoardingPass(false);
                    }}
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
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#eafcfc",
        borderRadius: 30, // Rounded tabs
        padding: 4,
        marginBottom: 16,
        marginHorizontal: 15,
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
        padding: 15,
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
    image: {
        width: "100%",
        marginBottom: 20,
    },
});

export default Booking;
