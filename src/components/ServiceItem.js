import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import CounterButton from "./CounterButton";

const ServiceItem = ({ title, price, onPress, buttonText = '+', hasTransportationTaken = false, hasMealsTaken = false }) => {
    return (
        <View style={styles.serviceItem}>
            <View>
                <Text style={styles.serviceTitle}>{title}</Text>
                {price && <Text style={styles.servicePrice}>₹ {price}</Text>}
            </View>
            {hasMealsTaken ? (
                // If hasMealsTaken is true, directly render CounterButton without TouchableOpacity
                <CounterButton />
            ) : (
                // Otherwise, render TouchableOpacity with conditional children
                <TouchableOpacity style={buttonText !== "+" ? styles.serviceButton : ""} onPress={onPress}>
                    {hasTransportationTaken ? (
                        <Icon name="checkcircle" size={37} color="#1e79e1" />
                    ) : buttonText === "+" ? (
                        <Icon name="pluscircle" size={37} color="#1e79e1" />
                    ) : (
                        <Text style={styles.serviceButtonText}>{buttonText}</Text>
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1,
    },
    serviceTitle: {
        fontSize: 16,
        color: '#333',
    },
    servicePrice: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    serviceButton: {
        backgroundColor: '#1e79e1',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 10,
    },
    serviceButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default ServiceItem;
