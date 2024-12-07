import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native"
import TicketInfo from "../components/TicketInfo"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"


const Payment = ({ navigation }) => {
    const { totalPassenger } = useContext(AppContext)

    return (
        < View style={styles.container}>
            <ScrollView>
                {/* Ticket Info Section */}
                < TicketInfo
                    serviceName="Haritha Boating Service"
                    startTime="10:00 AM"
                    endTime="4:00 PM"
                    location={{ start: 'Bhadrachalam', end: 'Pali Hills' }
                    }
                    seats={totalPassenger}
                    boardingPass={false}
                />
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('SinglePageAppication', {
                        screen: 'Home', // Bottom Tab Navigator screen
                        params: {
                            screen: 'BoardingPass', // Nested Stack screen under HomeStackNavigator
                        },
                    })
                }

            >
                <Text style={styles.buttonText}>Payment</Text>
            </TouchableOpacity>
        </View >
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
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
});


export default Payment

