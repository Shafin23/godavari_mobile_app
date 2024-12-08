import { useContext } from "react"
import { Image, StyleSheet, View } from "react-native"
import { AppContext } from "../context/AppContext"
import { Text } from "react-native"

const NoTicket = () => {

    return (
        <View style={style.container}>
            <Image source={require('../../assets/images/noTicket.png')} style={style.image} />
            <Text style={style.text}>You don’t have any active ticket</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15
    },
    image: {
        width: "100%"
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2b2939"
    }
})

export default NoTicket