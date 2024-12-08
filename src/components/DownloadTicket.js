import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import TicketInfo from "./TicketInfo"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const DownLoadTicket = () => {
    const { totalPassenger } = useContext(AppContext)
    const navigation = useNavigation()
    return (
        <ScrollView>
            <TicketInfo
                serviceName="Haritha Boating Service"
                startTime="10:00 AM"
                endTime="4:00 PM"
                location={{ start: "Bhadrachalam", end: "Pali Hills" }}
                seats={totalPassenger}
                shouldShowSeatAndPrice={false}
                containerPadding={45}
            />

            {/* download ticket--------- */}
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('EnterNumber')} // Navigate to EnterNumber screen
            >
                <FontAwesome name="download" size={20} color="#836702" style={{ marginRight: 8 }} />
                <Text style={style.buttonText}>Download Ticket</Text>
            </TouchableOpacity>

            {/* cancel booking------------ */}
            <TouchableOpacity
                style={style.outlineButton}
                onPress={() => navigation.navigate('CancelBookingScreen')} // Navigate to EnterNumber screen
            >
                <Text style={style.outlineButtonText}>Cancel Booking</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    button: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
        width: "90%",
        marginLeft: 15
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#836702',
    },
    outlineButton: {
        backgroundColor: 'transparent', // Transparent background
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: "90%",
        marginLeft: 15,
        borderWidth: 2, // Add border
        borderColor: '#FFD700', // Border color
    },
    outlineButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD700', // Text color matches the border
    },

})

export default DownLoadTicket