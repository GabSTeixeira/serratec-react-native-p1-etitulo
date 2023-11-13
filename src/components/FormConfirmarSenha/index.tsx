import { Text, View, TextInput, Image, TouchableOpacity, Linking} from 'react-native'
import { FormConfirmarSenhaStyles } from './formConfirmarSenhaStyle'
import OlhoImage from '../../assets/images/olho.png'


export const FormConfirmarSenha = ( { navigation } : any) => {


    const handleOpenDrawer = () => {
        navigation.openDrawer()
    }

    return (
        <View style={FormConfirmarSenhaStyles.containerFormulario}>
            <View style={FormConfirmarSenhaStyles.content}>
                <Text style={FormConfirmarSenhaStyles.titulo}>GABRIEL DA SILVA TEIXEIRA</Text>
                <View style={FormConfirmarSenhaStyles.inputGroup}>
                    <View style={FormConfirmarSenhaStyles.infoSenha}>
                        <Text style={FormConfirmarSenhaStyles.infoSenhaText}>Digite sua senha para acessar o e-Título.</Text>
                        <View style={FormConfirmarSenhaStyles.viewImage}>
                            <Image source={OlhoImage} style={FormConfirmarSenhaStyles.image}></Image>
                        </View>
                    </View>
                    <TextInput style={FormConfirmarSenhaStyles.inputSenha}></TextInput>
                    <View style={{borderBottomWidth: 2, borderColor: 'red'}}>
                        <Text style={FormConfirmarSenhaStyles.recuperarSenha} onPress={()=> Linking.openURL('http://google.com')}>ESQUECI MINHA SENHA</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={FormConfirmarSenhaStyles.botaoConfirmar} onPress={handleOpenDrawer} >
                <Text style={FormConfirmarSenhaStyles.botaoTexto}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}