import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
    return <View style={styles.mealItem}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0.2 },
        shadowRadius: 8,
    },
});
