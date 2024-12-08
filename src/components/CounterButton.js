import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterButton = ({ initialCount = 0, onIncrement, onDecrement }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        if (onIncrement) onIncrement(newCount);
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            if (onDecrement) onDecrement(newCount);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>{count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e79e1",
        justifyContent:"space-between",
        borderRadius: 20,
        padding: 0,
        
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical:10
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    countContainer:{
        padding:10
    },
    countText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default CounterButton;
