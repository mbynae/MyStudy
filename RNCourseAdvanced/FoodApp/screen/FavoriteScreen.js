// import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = () => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsId = useSelector(state => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter(meal => favoriteMealsId.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>즐겨찾기를 등록해주세요.</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
