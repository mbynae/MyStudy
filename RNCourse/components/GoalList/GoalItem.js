import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, id, onDeleteItem }) => {
    return (
        <View style={styles.goalItems}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={{ color: '#eee' }}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        backgroundColor: '#1687a7',
        borderRadius: 6,
        color: '#fff',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#fff',
        padding: 8,
    },
});
