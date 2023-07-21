import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const ExpensesOutput = () => {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    );
};

export default ExpensesOutput;
