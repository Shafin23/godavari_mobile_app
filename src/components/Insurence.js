import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Insurence = ({marginBottom=100}) => {
    return (
        <View style={StyleSheet.create({ marginBottom: marginBottom, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" })}>
            {/* insurence information */}
            <View>
                <Text style={StyleSheet.create({ fontSize: 22, color: "#2b2939", fontWeight: "bold" })} >Insurance</Text>
                <Text style={StyleSheet.create({ color: "#767199", fontSize: 14 })}>At just ₹ 50 per passenger get :</Text>
                <Text style={StyleSheet.create({ fontSize: 18, color: "#4f4b68" })}>Insurance Coverage</Text>
                <Text>Upto ₹ 70,00 on hospitalization &</Text>
                <Text>Upto ₹ 5,00,00 in case of Death/PTD</Text>
            </View>

            {/* plus icon */}
            <TouchableOpacity onPress={() => console.log(1)}>
                <Icon name="pluscircle" size={37} color="#1e79e1" />
            </TouchableOpacity>
        </View>
    );
};





export default Insurence