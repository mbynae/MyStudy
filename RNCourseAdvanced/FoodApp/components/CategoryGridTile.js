import React from 'react';
import { View, Pressable, Text, StyleSheet, Platform, ImageBackground } from 'react-native';
import italianFood from '../assets/image/italianFood.jpg';

const CategoryGridTile = ({ title, color, colorOver, menuImage, onPress }) => {
    // console.log(menuImage);
    return (
        <View style={styles.gridItem}>
            <Pressable
                // android_ripple={{ color: colorOver }}
                android_ripple={{ color: '#000' }}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={onPress}>
                <ImageBackground
                    source={menuImage}
                    style={styles.rootScreen} //영역을 지정해주기 위해 스타일링이 필요하다.
                    imageStyle={styles.backgroundImage}>
                    {/* <View style={[styles.innerContainer, { backgroundColor: color }]}> */}
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white', //IOS는 요소에 그림자를 넣을 때 반드시 배경색을 넣어야 적용이 된다.
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0.2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.7,
    },
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8, //부모 요소에만 테두리 변경이 있어서 자식 요소에 배경색을 넣으려면 여기에도 적용해야 테두리가 적용됨
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
});
