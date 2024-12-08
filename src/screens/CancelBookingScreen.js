import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CancelTripScreen from '../components/CancelTripScreen';

const CancelBookingScreen = () => {
    const [selectedReason, setSelectedReason] = useState(null);
    const [otherReason, setOtherReason] = useState('');
    const [modalVisible, setModalVisible] = useState(false); // State to handle popup visibility

    const reasons = [
        { id: 1, label: 'Change of Plans', description: 'Your travel dates or destination have changed.' },
        { id: 2, label: 'Medical Emergency', description: 'You or a family member have encountered a health issue.' },
        { id: 3, label: 'Found a Better Deal', description: 'You found a better deal for your trip.' },
        { id: 4, label: 'Other Reason', description: 'Please specify in few words.' },
    ];

    const handleSelectReason = (id) => {
        setSelectedReason(id);
    };

    const handleCancelBooking = () => {
        if (selectedReason === 4 && !otherReason.trim()) {
            alert('Please specify your reason.');
            return;
        }
        setModalVisible(true); // Open the popup
    };

    const closeModal = () => {
        setModalVisible(false); // Close the popup
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Cancellation Policy */}
                <Text style={styles.sectionTitle}>Cancellation Policy</Text>
                <Text style={styles.policyText}>
                    90% Refund: If canceled more than 5 days before the scheduled tour date.
                </Text>
                <Text style={styles.policyText}>
                    50% Refund: If canceled 3 to 5 days before the scheduled tour date.
                </Text>
                <Text style={styles.policyText}>
                    No Refund: If canceled within 1 day of the scheduled tour date.
                </Text>
                <Text style={[styles.policyText, styles.note]}>
                    *Note: Booking fees are non-refundable in all cases.
                </Text>

                {/* Improvement Section */}
                <Text style={styles.sectionTitle}>We’d love to improve</Text>
                <Text style={styles.sectionSubtitle}>Tell us the reason why you are cancelling.</Text>

                {/* Cancellation Reasons */}
                {reasons.map((reason) => (
                    <TouchableOpacity
                        key={reason.id}
                        style={[
                            styles.reasonContainer,
                            selectedReason === reason.id && styles.reasonSelected,
                        ]}
                        onPress={() => handleSelectReason(reason.id)}
                    >
                        <View style={styles.reasonHeader}>
                            <Text style={styles.reasonText}>{reason.label}</Text>
                            <Icon
                                name={selectedReason === reason.id ? 'remove' : 'add'}
                                size={20}
                                color="#ff6f61"
                            />
                        </View>
                        {selectedReason === reason.id && (
                            <Text style={styles.reasonDescription}>{reason.description}</Text>
                        )}
                    </TouchableOpacity>
                ))}

                {/* Other Reason Input */}
                {selectedReason === 4 && (
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Please specify in a few words..."
                            value={otherReason}
                            onChangeText={setOtherReason}
                            multiline={true} // Enables text area behavior
                            textAlignVertical="top" // Ensures text starts from the top
                        />
                    </View>
                )}

                {/* Cancel Booking Button */}
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancelBooking}>
                    <Text style={styles.cancelButtonText}>Cancel Booking</Text>
                </TouchableOpacity>
            </View>

            {/* Popup Component */}
            <Modal
                animationType="none" // No animation when showing or hiding the modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal} // Handle Android's back button
            >
                <CancelTripScreen closeModal={closeModal} />
            </Modal>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff6f61',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    policyText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    note: {
        color: '#ff6f61',
        fontStyle: 'italic',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
    },
    reasonContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    reasonSelected: {
        borderColor: '#ff6f61',
        backgroundColor: '#ffece9',
    },
    reasonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reasonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    reasonDescription: {
        marginTop: 10,
        fontSize: 14,
        color: '#666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        fontSize: 14,
        color: '#333',
    },
    cancelButton: {
        backgroundColor: '#ff6f61',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textAreaContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        height: 150, // Sets height for the container
        backgroundColor: '#f9f9f9', // Optional: Light background for a better look
    },
    textArea: {
        fontSize: 14,
        color: '#333',
        height: '100%', // Takes full height of the container
    },

});

export default CancelBookingScreen;
