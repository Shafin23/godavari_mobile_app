import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CancelTripScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelPress = () => {
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false); // Hide the modal
  };

  const confirmCancel = () => {
    setModalVisible(false);
    alert('Trip cancelled!'); // Handle cancellation logic here
  };

  return (
    <View style={styles.container}>
      {/* Main Cancel Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
        <Text style={styles.cancelButtonText}>Cancel Booking</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Icon name="close" size={20} color="#ff6f61" />
            </TouchableOpacity>

            {/* Popup Content */}
            <Text style={styles.modalTitle}>Are you sure you want cancel this trip?</Text>
            <Text style={styles.modalDescription}>
              Cancellations within 24 hours of booking receive a full refund. For cancellations up to
              72 hours before departure, a 20% fee applies.
            </Text>

            {/* Confirm Cancel Button */}
            <TouchableOpacity style={styles.modalCancelButton} onPress={confirmCancel}>
              <Text style={styles.modalCancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  cancelButton: {
    backgroundColor: '#ff6f61',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '85%',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalCancelButton: {
    backgroundColor: '#ff6f61',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  modalCancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CancelTripScreen;
