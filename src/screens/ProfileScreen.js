import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashedLine from '../components/DashedLine';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [faqExpanded, setFaqExpanded] = useState(null); // To handle accordion toggle
    const navigation = useNavigation()

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const toggleFaq = (index) => {
        setFaqExpanded((prev) => (prev === index ? null : index));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Contact Section */}
            <View style={styles.contactContainer}>
                <Text style={styles.contactTitle}>Contact us</Text>
                <Text style={styles.contactDetails}>
                    Email: godavaritravelmate@gmail.com{'\n'}
                    Phone: 8845779561
                </Text>
            </View>

            <View style={styles.phoneContainer}>
                <View style={StyleSheet.create({ borderRadius: "50%", backgroundColor: "#f2f7fd", width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center" })}><Icon name="call" size={20} color="#767199" /></View>
                <Text style={styles.phoneNumber}>9963995689</Text>
            </View>
            <DashedLine />

            {/* Toggle Section */}
            <View style={styles.toggleContainer}>
                <Text style={styles.toggleText}>
                    Get booking updates and promotional offers notification.
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#4CAF50' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            {/* FAQ Section */}
            <View style={styles.faqContainer}>
                <Text style={styles.faqTitle}>Frequently asked questions</Text>
                {[
                    'How do I book a ferry ticket using the Godavari Travel Mate app?',
                    'What is the cancellation policy for booked tickets?',
                    'How can I contact customer support?',
                ].map((question, index) => (
                    <View key={index}>
                        <TouchableOpacity
                            style={styles.faqItem}
                            onPress={() => toggleFaq(index)}
                        >
                            <Text style={styles.faqText}>{question}</Text>
                            <Icon
                                name={
                                    faqExpanded === index
                                        ? 'chevron-up-outline'
                                        : 'chevron-down-outline'
                                }
                                size={20}
                                color="#000"
                            />
                        </TouchableOpacity>
                        {faqExpanded === index && (
                            <Text style={styles.faqAnswer}>
                                This is the answer for: {question}
                            </Text>
                        )}
                    </View>
                ))}
            </View>

            {/* Log Out Button */}
            <TouchableOpacity onPress={()=>navigation.navigate("Landing")} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f8f8f8',
    },
    contactContainer: {
        backgroundColor: '#6ba7eb',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 5,
        marginBottom: 20,
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    contactDetails: {
        fontSize: 14,
        color: '#ffffff',
        marginBottom: 20,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10

    },
    phoneNumber: {
        fontSize: 16,
        marginLeft: 10,
        color: '#2b2939',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
        marginHorizontal: 15
    },
    toggleText: {
        fontSize: 14,
        color: '#555555',
        flex: 1,
        marginRight: 10,
    },
    faqContainer: {
        marginBottom: 20,
        marginHorizontal: 15
    },
    faqTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333333',
    },
    faqItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    faqText: {
        fontSize: 14,
        color: '#333333',

    },
    faqAnswer: {
        fontSize: 14,
        color: '#555555',
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: '#ff6f61',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    logoutText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
