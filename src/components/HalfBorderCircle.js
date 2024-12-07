import React from "react";
import { StyleSheet, View } from "react-native";

const RightBorderCircle = () => {
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
    borderRightWidth: 2, // Add border only on the right side
    borderRightColor: "#e8e7ee", // Border color for the right side
    position:"absolute",
    zIndex:10,
    top:143,
    left:-23
  },
});

export default RightBorderCircle;
