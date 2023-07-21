import React from 'react';
import { Image, StyleSheet, Text, View, Dimensiosn, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ userNumber, roundNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions(); //가로 세로 모드에 따라 동적으로 화면을 구성하기 위해 사용

    //이미지의 가로, 세로값을 변수에 담아 동적으로 지정
    let imageSize = 300;

    if (width > 400) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 100;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            {/* 스타일 병합을 사용해 스타일을 적용 */}
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/image/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                핸드폰이 숫자 <Text style={styles.highlight}>{userNumber}</Text> 를 맞추는데{' '}
                <Text style={styles.highlight}>{roundNumber}</Text> 번 걸렸습니다.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>다시하기</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.white,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.boxColor400,
    },
});
