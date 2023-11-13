import { NavigationContainer } from '@react-navigation/native'
import { BottomtabRoutes } from './tab-routes'
import { DrawerRoutes } from './drawer-routes'

export const Routes = () => {
    return (
        <NavigationContainer>
            {/* <BottomtabRoutes /> */}
            <DrawerRoutes />
        </NavigationContainer>
    )
}