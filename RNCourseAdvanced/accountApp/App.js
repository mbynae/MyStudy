import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constant/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.color.primary500 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                tabBarStyle: { backgroundColor: GlobalStyles.color.primary500 },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#73620F',
            }}>
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenses}
                options={{
                    title: '최근 지출',
                    tabBarLabel: '최근 지출',
                    tabBarIcon: ({ size, color }) => <Ionicons name="wallet" size={size} color={color} />,
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: '전체 지출',
                    tabBarLabel: '전체 지출',
                    tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} />,
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{ headerShown: false }} />
                    <Stack.Screen name="MagageExpense" component={ManageExpense} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
