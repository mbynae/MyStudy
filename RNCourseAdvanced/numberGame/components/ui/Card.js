import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
    return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        // marginTop: 30,
        marginTop: deviceWidth < 380 ? 20 : 30,
        marginHorizontal: 24,
        alignItems: 'center',
        backgroundColor: Colors.boxColor500,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
});
