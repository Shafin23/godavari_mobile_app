import React from "react";
import { StyleSheet, View } from "react-native";

const LeftBorderCircle = () => {
  return (
    <View style={styles.circle}></View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50, // Make it circular
    backgroundColor: "white", // Circle background
    borderLeftWidth: 2, // Add border only on the left side
    borderLeftColor: "#e8e7ee", // Border color for the left side
    position: "absolute",
    zIndex: 20,
    top: 143, // Position it vertically where you want
    right: -23, // Align the circle to the left side
  },
});

export default LeftBorderCircle;
