import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import { BottomtabRoutes } from './tab-routes'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'

const DrawerTab = createDrawerNavigator()


export const DrawerRoutes = () => {
    
    return (

        <DrawerTab.Navigator screenOptions={{headerShown: false}}>
            <DrawerTab.Screen 
                name='Login'
                component={LoginPage}
            />

            <DrawerTab.Screen
                name='Main'
                component={MainPage}
            />
        </DrawerTab.Navigator>
    )
}
