import { View, Text, StyleSheet } from "react-native";
import DashedLine from "./DashedLine";


const ServiceSection = ({ title, description, children }) => {
    return (
        <View style={styles.serviceSection}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {description && <Text style={styles.sectionDescription}>{description}</Text>}
            {children}
            <DashedLine />
        </View>
    );
};

const styles = StyleSheet.create({
    serviceSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    sectionDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    }
})


export default ServiceSection