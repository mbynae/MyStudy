import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName="Welcom"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#3c0a6b' },
                        headerTintColor: '#fff',
                        tabBarActiveTintColor: '#3c0a6b',
                    }}>
                    <BottomTab.Screen
                        name="Welcom"
                        component={WelcomeScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                        }}
                    />
                    <BottomTab.Screen
                        name="User"
                        component={UserScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </>
    );
}
