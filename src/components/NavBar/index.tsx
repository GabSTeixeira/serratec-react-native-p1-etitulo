import { View, Text, Image } from 'react-native'
import { NavBarStyles } from './NavBar'
import Etitulo from '../../assets/images/textIcon.png'
import OndeVotar from '../../assets/images/locationIcon.png'
import Notificacoes from '../../assets/images/notificationIcon.png'
import MaisOpcoes from '../../assets/images/moreOptionsIcon.png'
import { GlobalStyles } from '../../../globalStyle'

export const NavBar = () => {

    return (
        <View style={NavBarStyles.container}>
            <View style={NavBarStyles.column}>
                <View style={NavBarStyles.viewIcons}>
                    <Image style={GlobalStyles.images} source={Etitulo}/> 
                </View>
                <Text style={NavBarStyles.columntext}>e-título</Text>
            </View>
            <View style={NavBarStyles.column}>
                <View style={NavBarStyles.viewIcons}>
                    <Image style={GlobalStyles.images} source={OndeVotar}/> 
                </View>                
                <Text style={NavBarStyles.columntext}>Onde Votar</Text>
            </View>
            <View style={NavBarStyles.column}>
                <View style={NavBarStyles.viewIcons}>
                    <Image style={GlobalStyles.images} source={Notificacoes}/> 
                </View>                
                <Text style={NavBarStyles.columntext}>Notificações</Text>
            </View>
            <View style={NavBarStyles.column}>
                <View style={NavBarStyles.viewIcons}>
                    <Image style={GlobalStyles.images} source={MaisOpcoes}/> 
                </View>                
                <Text style={[NavBarStyles.columntext, NavBarStyles.selectedText]}>Mais opções</Text>
            </View>
        </View>
    )
}