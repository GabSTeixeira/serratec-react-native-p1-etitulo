import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { LoginPage } from '../screens/LoginPage'
import { MainPage } from '../screens/MainPage'


const BottomTab = createBottomTabNavigator()

export const BottomtabRoutes = () => {
    return (
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
            <BottomTab.Screen
                name='teste1'
                component={LoginPage}
            />
            <BottomTab.Screen
                name='teste2'
                component={MainPage}
            />
        </BottomTab.Navigator>
    )
}
