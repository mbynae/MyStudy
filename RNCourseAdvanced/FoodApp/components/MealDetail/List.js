import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({ data }) => {
    return data.map(dataPoint => (
        <View style={styles.listItem}>
            <Text style={styles.itemText} key={dataPoint}>
                {dataPoint}
            </Text>
        </View>
    ));
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        // backgroundColor: '#01A79D',
        borderWidth: 1,
        borderColor: '#018b82',
    },
    itemText: {
        color: '#018b82',
        textAlign: 'center',
    },
});
