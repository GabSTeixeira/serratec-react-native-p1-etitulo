
import { StyleSheet } from 'react-native'

export const FormConfirmarSenhaStyles = StyleSheet.create({
    
    containerFormulario: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    content: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    titulo: {
        fontSize: 16,
        paddingTop: 60,
        fontWeight: 'bold'
    },

    form: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    infoSenha: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    inputGroup: {
        flexDirection: 'column',
        height: 165,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },

    infoSenhaText: {
        fontSize: 15,
        color: '#828282',
    },

    viewImage: {
        height: 20,
        width: 20,
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },

    inputSenha: {
        width: 360,
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        paddingLeft: 10
    },

    recuperarSenha: {
        color: '#CB5B60',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 25,
        marginVertical: -3
    },

    botaoConfirmar: {
        width: '95%',
        height: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#FEAF36'
    },

    botaoTexto: {
        fontSize: 20,
        color: '#92652C'
        
    }

})