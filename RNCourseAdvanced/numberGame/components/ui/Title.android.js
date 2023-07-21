import { StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 12,
        color: Colors.white,
        // borderWidth: Platform.OS === 'android' ? 3 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 3 }),
        borderWidth: 3,
        borderColor: Colors.white,
        maxWidth: '80%',
        width: 300,
    },
});
