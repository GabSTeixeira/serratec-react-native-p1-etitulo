import { View, Text } from 'react-native'
import { NavBar } from '../../components/NavBar'
import { TopBar } from '../../components/topBar'
import { MainPageStyles } from './mainPageStyle'
import { GrupoOpcoes } from '../../components/GrupoOpcoes'
import { Opcao } from '../../components/GrupoOpcoes'
import Verificado from '../../assets/images/fileverifiedIcon.png'
import Documento from '../../assets/images/fileTextIcon.png'
import Verificar from '../../assets/images/fileTicket.png'

export const MainPage = () => {
    const grupo1: Opcao[] = [
        {
            id: '1', 
            imagem: Verificado, 
            titulo: 'Quitação eleitoral',
            desc: 'Emita sua certidão de quitação eleitoral.'
        },
        {
            id: '2', 
            imagem: Verificado, 
            titulo: 'Nada consta criminal eleitoral',
            desc: 'Emita sua certidão de nada consta criminal eleitoral.'
        },
        {
            id: '3', 
            imagem: Verificado, 
            titulo: 'Declaração de trabalho eleitoral',
            desc: 'Emita a declaração de trabalho eleitoral'
        }
    ]

    const grupo2: Opcao[] = [
        {
            id: '1', 
            imagem: Documento, 
            titulo: 'Justificativa de ausência',
            desc: 'Faça seu pedido de justificative de ausência online.'
        },
        {
            id: '2', 
            imagem: Documento, 
            titulo: 'Justificativa presencial',
            desc: 'Consulte endereços para justificar sua ausência presencialmente.'
        }
    ]

    const grupo3: Opcao[] = [
        {
            id: '1', 
            imagem: Verificado, 
            titulo: 'Imprimir título eleitoral',
            desc: 'Realize a impressão do seu título eleitoral.'
        },
        {
            id: '2', 
            imagem: Verificar, 
            titulo: 'Débitos eleitorais',
            desc: 'Consulte e emite guia para pagamentos de débitos eleitorais.'
        },
        {
            id: '3',
            imagem: Documento,
            titulo: 'Autenticidade de documentos',
            desc: 'veja se a certidão ou o documento são autênticos.'
        }
    ]

    return (
        <View style={MainPageStyles.container}>
            <View style={MainPageStyles.header}>
                <TopBar />
            </View>
            <View style={MainPageStyles.main}>
                <GrupoOpcoes tituloGrupo={'Certidões'} arrayOpcoes={grupo1}/>
                <GrupoOpcoes tituloGrupo={'Justificativa'} arrayOpcoes={grupo2}/>
                <GrupoOpcoes tituloGrupo={'Outras opções'} arrayOpcoes={grupo3}/>
            </View>
            <View style={MainPageStyles.footer}>
                <NavBar />
            </View>
        </View>
    )
}