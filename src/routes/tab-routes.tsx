import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Text } from 'react-native'


import { LoginPage } from '../screens/LoginPage'
import { MainPage } from '../screens/MainPage'



const BottomTab = createBottomTabNavigator()

export const BottomtabRoutes = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false, 
            tabBarStyle: {justifyContent: 'space-evenly', alignItems: 'center' ,backgroundColor: 'black', height: 45}
            }}>
            <BottomTab.Screen
                name='Login'
                component={LoginPage}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='log-in' color={color} size={20}/>,
                    tabBarLabel: ({color}) => <Text style={{fontSize: 15, fontWeight: 'bold', color: color}}> Login</Text>
                }}
            />
            <BottomTab.Screen
                name='Home'
                component={MainPage}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='home' color={color} size={20}/>,
                    tabBarLabel: ({color}) => <Text style={{fontSize: 15, fontWeight: 'bold', color: color}}> Home</Text>
                }}
            />
        </BottomTab.Navigator>
    )
}
