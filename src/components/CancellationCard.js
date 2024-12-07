import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CancellationCard = ({ heading, textArray }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.header}>{heading}</Text>

            {textArray.map((item, index) => (
                <View
                    key={index}
                    style={styles.listItem}
                >
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text
                        style={[
                            styles.item,
                            heading === 'Refund Structure' && index === textArray.length - 1
                                ? styles.redText
                                : null,
                        ]}
                    >
                        {item}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3, // For Android shadow
        margin: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2F2F2F',
        marginBottom: 10,
    },
    listItem: {
        marginLeft: 25,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bulletPoint: {
        fontWeight: 'bold',
    },
    item: {
        fontSize: 14,
        color: '#4F4F4F',
        marginBottom: 5,
        lineHeight: 20, // For better readability
        marginLeft: 10,
    },
    redText: {
        color: '#ff6666',
    },
});

export default CancellationCard;
