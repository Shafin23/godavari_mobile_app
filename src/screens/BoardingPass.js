import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TicketInfo from "../components/TicketInfo";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Correct Import

const BoardingPass = () => {
    const { totalPassenger } = useContext(AppContext);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TicketInfo
                serviceName="Haritha Boating Service"
                startTime="10:00 AM"
                endTime="4:00 PM"
                location={{ start: "Bhadrachalam", end: "Pali Hills" }}
                seats={totalPassenger}
                shouldShowSeatAndPrice={false}
                containerPadding={40}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("SinglePageAppication",{
                    screen: "Booking"
                })} // Navigate to EnterNumber screen
            >
                <FontAwesome name="download" size={20} color="#836702" style={{ marginRight: 8 }} />
                <Text style={styles.buttonText}>Download Ticket</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white",
        flex: 1,
    },
    button: {
        backgroundColor: "#FFD700",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: "row", // Align text and icon in a row
        justifyContent: "center", // Center them horizontally
        marginVertical: 20,
        width: "90%",
        marginLeft: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#836702",
    },
});

export default BoardingPass;
