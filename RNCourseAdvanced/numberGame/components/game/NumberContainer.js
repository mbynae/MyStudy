import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(92, 92, 15, 0.1)',
        borderWidth: 4,
        borderColor: Colors.boxColor500,
        // padding: 24,
        padding: deviceWidth < 380 ? 12 : 24,
        // margin: 24,
        margin: deviceWidth < 380 ? 12 : 24,
        marginTop: deviceWidth < 380 ? 24 : 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        // fontSize: 36,
        fontSize: deviceWidth < 380 ? 28 : 36,
        color: Colors.boxColor400,
    },
});
