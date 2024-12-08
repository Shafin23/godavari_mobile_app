import { useContext } from "react"
import TicketInfo from "./TicketInfo"
import { AppContext } from "../context/AppContext"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const ActiveTab = () => {
    const { totalPassenger } = useContext(AppContext)
    const { setViewBoardingPass } = useContext(AppContext)
    const navigation = useNavigation()

    const handlePress = () => {
        setViewBoardingPass(prev => !prev)
        // navigation.navigate('EnterNumber')
    }

    return (
        <View>
            <TicketInfo
                serviceName="Haritha Boating Service"
                startTime="10:00 AM"
                endTime="4:00 PM"
                location={{ start: "Bhadrachalam", end: "Pali Hills" }}
                seats={totalPassenger}
                shouldShowSeatAndPrice={false}
                containerPadding={45}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handlePress} // Navigate to EnterNumber screen
            >
                <Text style={styles.buttonText}>View Boading Pass →</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default ActiveTab