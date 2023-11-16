import { View, Text, ScrollView } from 'react-native'
import { NavBar } from '../../components/NavBar'
import { TopBar } from '../../components/topBar'
import { MainPageStyles } from './mainPageStyle'
import { GrupoOpcoes } from '../../components/GrupoOpcoes'
import { FlatList } from 'react-native'
import { Grupos } from './inputGrupos'

export const MainPage = ({ navigation }: any) => {
    return (
        <View style={MainPageStyles.container}>
            <View style={MainPageStyles.header}>
                <TopBar navigation={navigation}/>
            </View>
                <View style={MainPageStyles.main}>
                    <FlatList
                        data={Grupos}
                        keyExtractor={(_,index) => ''+index}
                        renderItem={({item}) => (
                            <GrupoOpcoes tituloGrupo={item.tituloGrupo} arrayOpcoes={item.arrayOpcoes}/>
                            )
                        }
                    />
                </View>
            <View style={MainPageStyles.footer}>
                <NavBar />
            </View>
        </View>
    )
}