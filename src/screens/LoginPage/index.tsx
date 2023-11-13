import { View } from "react-native"
import { GlobalStyles } from "../../../globalStyle"
import { LogoComTexto } from "../../components/LogoComTexto"
import { FormConfirmarSenha } from "../../components/FormConfirmarSenha"
import { LoginPageStyles } from "./loginPageStyle"

export const LoginPage = ( { navigation } : any ) => {

    return (
        <View style={GlobalStyles.container}>
            <View style={LoginPageStyles.viewTop}>
                <LogoComTexto />
            </View>
            <View style={LoginPageStyles.viewBot}>
                <FormConfirmarSenha navigation={navigation} />
            </View>
        </View>
    )
}