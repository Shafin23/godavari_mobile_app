import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const DashedLine = ({ dashWidth = 5, dashGap = 5, dashColor = 'gray', containerPadding = 20 }) => {
    const dashes = [];
    const lineWidth = screenWidth - containerPadding * 2; // Adjust width based on padding
    const numberOfDashes = Math.floor(lineWidth / (dashWidth + dashGap)); // Calculate number of dashes

    for (let i = 0; i < numberOfDashes; i++) {
        dashes.push(
            <View
                key={i}
                style={[
                    styles.dash,
                    { width: dashWidth, backgroundColor: dashColor, marginRight: dashGap },
                ]}
            />
        );
    }

    return (
        <View style={[styles.container, { paddingHorizontal: containerPadding }]}>
            <View style={[styles.dashedLine, { width: lineWidth }]}>{dashes}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center', // Center the dashed line within the container
        marginVertical:20,
        
    },
    dashedLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dash: {
        height: 1, // Thickness of the dashes
    },
});

export default DashedLine;
