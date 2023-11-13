import { createDrawerNavigator } from '@react-navigation/drawer'
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
