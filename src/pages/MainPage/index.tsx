import { View, Text } from 'react-native'
import { NavBar } from '../../components/NavBar'
import { TopBar } from '../../components/topBar'
import { MainPageStyles } from './mainPageStyle'
import { GrupoOpcoes } from '../../components/GrupoOpcoes'
import { Opcao } from '../../components/GrupoOpcoes'
import ImagemTeste from '../../assets/images/menuIcon.png'

export const MainPage = () => {

    const grupo1: Opcao[] = [
        {
            id: '1', 
            imagem: ImagemTeste, 
            texto: 'teste'
        },
        {
            id: '1', 
            imagem: ImagemTeste, 
            texto: 'teste'
        },
        {
            id: '1', 
            imagem: ImagemTeste, 
            texto: 'teste'
        }
    ]


    return (
        <View style={MainPageStyles.container}>
            <TopBar />
            <GrupoOpcoes arrayOpcoes={grupo1}
            />

            <NavBar />
        </View>
    )
}