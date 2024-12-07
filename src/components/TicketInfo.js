import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DashedLine from "./DashedLine";
import RightBorderCircle from "./HalfBorderCircle";
import LeftBorderCircle from "./RightBorderCircle";





const TicketInfoContainer = ({ header, text, textAlign = "left" }) => {
    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#2b2939" }}>
                {header}
            </Text>
            <Text
                style={{
                    textAlign,
                    fontWeight: "normal",
                    fontSize: 15,
                    color: "#4f4b68",
                }}
            >
                {text}
            </Text>
        </View>
    );
};

const TicketInfo = ({
    shouldShowSeatAndPrice = false,
    margin = 10,
    serviceName,
    startTime,
    endTime,
    location,
    seats,
    totalTicketPrice = null,
    boardingPass = true,
    containerPadding=30

}) => {
    return (
        <View style={{ position: "relative" }}>




            <View style={[styles.ticketInfoContainer, { margin }]}>
                <Text style={styles.serviceName}>{serviceName}</Text>
                <Text style={StyleSheet.create({ color: "767199", marginBottom: 15 })}>Wed, Jul 7 - 2023</Text>

                <RightBorderCircle />
                <LeftBorderCircle/>


                <View style={styles.row}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{startTime}</Text>
                        <Text style={styles.locationText}>{location.start}</Text>
                    </View>

                    <View style={styles.centerContainer}>
                        <View style={{ position: "absolute" }}>
                            <DashedLine containerPadding={130} />
                        </View>
                        <Icon name="boat" size={30} color="#007BFF" style={styles.boatIcon} />
                    </View>

                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{endTime}</Text>
                        <Text style={styles.locationText1}>{location.end}</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 5 }}>
                    <DashedLine containerPadding={containerPadding} />
                </View>

                {shouldShowSeatAndPrice && (
                    <View>
                        <View style={styles.priceHolder}>
                            <View style={styles.rowSeats}>
                                <Icon name="person" size={20} color="#333" style={styles.seatIcon} />
                                <Text style={styles.seatsText}>{seats} Seats</Text>
                            </View>
                            {totalTicketPrice && (
                                <Text style={styles.priceText}>₹ {totalTicketPrice}</Text>
                            )}
                        </View>
                    </View>
                )}

                {!shouldShowSeatAndPrice && (
                    <View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "start",
                                marginVertical: 10,
                            }}
                        >
                            <View>
                                <TicketInfoContainer header="Name" text="John Doe" />
                                <TicketInfoContainer header="Phone no." text="9619564489" />
                            </View>
                            <View>
                                <TicketInfoContainer
                                    header="Passenger"
                                    text="2 Seats"
                                    textAlign="right"
                                />
                                {boardingPass && <TicketInfoContainer
                                    header="Booking ID"
                                    text="ABCD124256"
                                    textAlign="right"
                                />}
                            </View>
                        </View>

                        {!boardingPass && <View style={styles.billBreakdownSection}>
                            <Text style={styles.sectionTitle}>Bill Breakdown</Text>

                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>
                                    <Text style={styles.icon}>👤</Text> 2 Passenger
                                </Text>
                            </View>
                            <View style={styles.subRowPassenger}>
                                <Text style={styles.subRowText}>• Adult 1</Text>
                                <Text style={styles.subRowPrice}>₹ 1,500</Text>
                            </View>
                            <View style={styles.subRowPassenger}>
                                <Text style={styles.subRowText}>• Child 1 (age 3 - 10)</Text>
                                <Text style={styles.subRowPrice}>₹ 1,000</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>Transportation</Text>
                            </View>
                            <View style={styles.subRow}>
                                <Text style={styles.subRowText}>Private Car</Text>
                                <Text style={styles.subRowPrice}>₹ 500</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>Meal</Text>
                            </View>
                            <View style={styles.subRow}>
                                <Text style={styles.subRowText}>Breakfast & Snacks</Text>
                                <Text style={styles.subRowPrice}>₹ 500</Text>
                            </View>
                            <View style={styles.subRow}>
                                <Text style={styles.subRowText}>Pure Veg Lunch</Text>
                                <Text style={styles.subRowPrice}>₹ 500</Text>
                            </View>

                            <View>
                                <DashedLine containerPadding={25} />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.totalText}>Total (taxes included)</Text>
                                <Text style={styles.totalPrice}>₹ 4,400</Text>
                            </View>
                        </View>}


                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ticketInfoContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,

    },
    cutout: {
        position: "absolute",
        width: 35,
        height: 35,
        backgroundColor: "white",
        borderRadius: 17.5, // Half of width/height to make it circular
        zIndex: 10,
        borderWidth: 1, // Use borderWidth for border thickness
        borderColor: "gray", // Use borderColor for border color
    },

    leftCutout: {
        top: 160,
        left: -10,
        transform: [{ translateY: -10 }],
    },
    rightCutout: {
        top: 160,
        right: -10,
        transform: [{ translateY: -10 }],
    },
    serviceName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    locationText: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
        fontWeight: "bold",
        textAlign: "left",
    },
    locationText1: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
        fontWeight: "bold",
        textAlign: "right",
    },
    centerContainer: {
        flex: 1,
        alignItems: "center",
        position: "relative",
        top: -10
    },
    boatIcon: {
        zIndex: 1,
    },
    rowSeats: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    seatIcon: {
        marginRight: 5,
    },
    seatsText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
    },
    priceHolder: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    rowPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    subRowText: {
        fontSize: 14,
        color: "#666",
    },
    subRowPassenger: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        paddingLeft: 20,
    },
    subRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        paddingLeft: 1,
    },
    subRowPrice: {
        fontSize: 14,
        color: "#666",
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
    },
    billBreakdownSection: {
        marginTop: 30,
    },
});

export default TicketInfo;
