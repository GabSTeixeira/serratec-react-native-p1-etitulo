import { Text, View, Image } from 'react-native'
import { TopBarStyles } from './TopBarStyle'
import { GlobalStyles } from '../../../globalStyle'
import MenuIcon from '../../assets/images/menuIcon.png'

export const TopBar = () => {
    return (
        <View style={TopBarStyles.fullContainer}>
            <View style={TopBarStyles.safeAreaContainer}>
                <View style={TopBarStyles.viewIcon}>
                    <Image style={GlobalStyles.images} source={MenuIcon} />
                </View>
                <Text style={[GlobalStyles.textWhiteBold, {fontSize: 22, fontWeight: 'bold'}]}>
                    Mais Opções
                </Text>
            </View>
        </View>
    )
}