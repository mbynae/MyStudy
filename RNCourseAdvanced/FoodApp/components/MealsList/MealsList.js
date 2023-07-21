import { FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ items }) => {
    const renderMealItem = itemData => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <MealItem {...mealItemProps} />;
    };

    return (
        <View>
            <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem} />
        </View>
    );
};

export default MealsList;
