import { useState } from 'react';
import { Image, Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    console.log(enteredGoalText);

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../../assets/image/goal.png')} />
                <TextInput style={styles.textInput} placeholder="목표 리스트" onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="추가하기" onPress={addGoalHandler} color="#1687a7" />
                    </View>
                    <View style={styles.button}>
                        <Button title="취소" onPress={onCancel} color="#014955" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#e4d1d3',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#f7dbdb',
        backgroundColor: '#fff',
        color: '#282828',
        fontSize: 16,
        borderRadius: 6,
        width: '100%',
        padding: 10,
        paddingLeft: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 6,
    },
});
