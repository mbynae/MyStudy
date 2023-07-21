import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#01A79D',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#01A79D',
    },
});
