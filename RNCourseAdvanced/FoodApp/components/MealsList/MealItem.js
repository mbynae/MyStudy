import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../../ui/Card';
import MealDetails from '../MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    };

    return (
        <Card>
            <Pressable
                android_ripple={{ color: '#e5e5e5' }}
                style={({ pressed }) => pressed && styles.buttonPressed}
                onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </Card>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.9,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
