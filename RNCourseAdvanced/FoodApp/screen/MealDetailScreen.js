import React, { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    //store에 접근해 키를 통해 slice의 데이터를 호출
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    //데이터 변경 함수를 호출하기 위한 dispatch
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealsIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        // !mealIsFavorite && favoriteMealsCtx.addFavorite(mealId);
        !mealIsFavorite && dispatch(addFavorite({ id: mealId })); // dispatch를 통해 export한 메서드를 호출할 수 있다. 이 때 함수에 설정한 객체로 전달해야 한다.
        // mealIsFavorite && favoriteMealsCtx.removeFavorite(mealId);
        mealIsFavorite && dispatch(removeFavorite({ id: mealId }));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton onPress={changeFavoriteStatusHandler} name="star" color={mealIsFavorite ? 'yellow' : 'white'} />,
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    detailText: {
        color: '#000',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
