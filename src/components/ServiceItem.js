import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const ServiceItem = ({ title, price, onPress, buttonText = '+' }) => {
    return (
        <View style={styles.serviceItem}>
            <View>
                <Text style={styles.serviceTitle}>{title}</Text>
                {price && <Text style={styles.servicePrice}>₹ {price}</Text>}
            </View>
            <TouchableOpacity style={buttonText !== "+" ? styles.serviceButton : ""} onPress={onPress}>
                {buttonText == "+" ? <Icon name="pluscircle" size={37} color="#1e79e1" /> : <Text style={styles.serviceButtonText}>{buttonText}</Text>
                }
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
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
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 12,
    },
    serviceButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    }
})


export default ServiceItem