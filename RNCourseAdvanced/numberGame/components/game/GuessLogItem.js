import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>핸드폰이 추측한 숫자 : {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: Colors.boxBorder500,
        borderRadius: 40,
        backgroundColor: Colors.gradient,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

    itemText: {
        fontFamily: 'open-sans',
    },
});
