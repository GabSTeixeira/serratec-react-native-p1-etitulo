import { View, Text, Image, FlatList } from 'react-native'
import { GlobalStyles } from '../../../globalStyle'
import PlaceHolderImage from '../../assets/images/menuIcon.png'
import { GrupoOpcoesStyles } from './GrupoOpcoesStyle'


export type Opcao = {
    id: string,
    imagem: typeof PlaceHolderImage,
    texto: string
    
}

interface inputOpcoes {
    arrayOpcoes: Opcao[]
}


export const GrupoOpcoes = ( { arrayOpcoes } : inputOpcoes) => {

    return (
        <FlatList 
            data={arrayOpcoes}
            keyExtractor={opcao => opcao.id}
            renderItem={({ item }) => (
                <View style={GrupoOpcoesStyles.container}>
                    <View style={GrupoOpcoesStyles.viewIcon}>
                        <Image style={GlobalStyles.images} source={item.imagem}/>
                    </View>
                    <Text>{item.texto}</Text>
                </View>
            )} 
        />

    ) 
}


