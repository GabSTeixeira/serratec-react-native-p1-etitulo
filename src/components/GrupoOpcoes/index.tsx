import { View, Text, Image, FlatList } from 'react-native'
import { GlobalStyles } from '../../../globalStyle'
import PlaceHolderImage from '../../assets/images/menuIcon.png'
import { GrupoOpcoesStyles } from './GrupoOpcoesStyle'


export type Opcao = {
    id: string,
    imagem: typeof PlaceHolderImage,
    titulo: string,
    desc: string
    
}

interface inputOpcoes {
    tituloGrupo: string,
    arrayOpcoes: Opcao[]
}


export const GrupoOpcoes = ( { tituloGrupo, arrayOpcoes } : inputOpcoes) => {
    const customBorderRadius = 3

    return (
        <View style={GrupoOpcoesStyles.container}>
            <Text>{tituloGrupo}</Text>
            <FlatList 
                data={arrayOpcoes}
                keyExtractor={opcao => opcao.id}
                renderItem={({ item, index }) => (
                    <View style={[GrupoOpcoesStyles.row,
                        (index===0) ? {
                            borderTopLeftRadius: customBorderRadius,
                            borderTopRightRadius: customBorderRadius
                        } : {},
                        (index===arrayOpcoes.length-1) ? {
                            borderBottomLeftRadius: customBorderRadius,
                            borderBottomRightRadius: customBorderRadius
                        } : {}
                    ]}>
                        <View style={GrupoOpcoesStyles.viewIcon}>
                            <Image style={GlobalStyles.images} source={item.imagem}/>
                        </View>
                        <View style={GrupoOpcoesStyles.rowViewText}>
                            <Text style={GrupoOpcoesStyles.rowTitulo}>{item.titulo}</Text>
                            <Text style={GrupoOpcoesStyles.rowDesc}>{item.desc}</Text>
                        </View>
                    </View>
                )} 
            />

        </View>
    ) 
}


