import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { height } = useWindowDimensions(); //Dimension Api를 동적으로 사용기 위한 Hook

    const numberInputHandler = enteredText => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('유효하지 않은 숫자입니다.', '1~99 사이의 값을 입력해주세요.', [
                { text: '확인', style: 'destructive', onPress: resetInputHandler },
            ]);
            return;
        }

        onPickNumber(chosenNumber);
    };

    const marginTopDistance = height < 400 ? 30 : 100;

    return (
        //위아래로 올라갔다 내려가는 position을 사용하기 위해 ScrollView가 필요
        <ScrollView style={styles.screen}>
            {/* 가로 스크롤 시 IOS에서 키패드 작동 안하는 걸 수정해주는 기능*/}
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText style={styles.instructionText}>Enter a number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad" //키보드 패드의 종류를 지정 (number-pad: 숫자패드만 나옴)
                            autoCapitalize="none" //영어 입력 시 자동으로 대문자로 바꿔주는 기능
                            autoCorrect={false} //문자 입력 시 자동 수정을 해주는 기능
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>리셋</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>확인</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    numberInput: {
        width: 50,
        height: 50,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.boxText500,
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.boxText500,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
