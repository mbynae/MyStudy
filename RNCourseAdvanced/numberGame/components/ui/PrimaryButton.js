import { Pressable, Text, View, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, onPress, style }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? [styles.pressed, [styles.buttonInnerContainer, style]] : [styles.buttonInnerContainer, style]
                }
                onPress={onPress}
                android_ripple={{ color: 'hsl(60, 50%, 55%)' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#acac39',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
