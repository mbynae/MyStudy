import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const pickedNumberHandler = pickedNumber => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = guessRoundsNumber => {
        setGameIsOver(true);
        setGuessRounds(guessRoundsNumber);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
    }

    return (
        <>
            <StatusBar style="light" />
            <LinearGradient colors={[Colors.gradient, Colors.white]} style={styles.rootScreen}>
                <ImageBackground
                    source={require('./assets/image/background.png')}
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}>
                    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
