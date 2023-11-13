import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'


const BottomTab = createBottomTabNavigator()

export const BottomtabRoutes = () => {
    return (
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
            <BottomTab.Screen 
                name='Login'
                component={LoginPage}
            />

            <BottomTab.Screen
                name='Main'
                component={MainPage}
            />
        </BottomTab.Navigator> 
    )
}
