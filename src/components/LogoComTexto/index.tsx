import { Image, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { LogoComTextoStyles } from './logoComTextoStyle'
import { GlobalStyles } from '../../../globalStyle'
import LogoTSE from '../../assets/images/logoTSE.png'
import * as Font from 'expo-font'

export const LogoComTexto = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
        await Font.loadAsync({
            'Coolvetica': require('../../assets/fonts/coolvetica-rg.ttf'),
        });
        setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return (
        <View>
            <Text>Loading...</Text>
        </View>
        );
    }
    return (
        <>
        <View style={[LogoComTextoStyles.viewImage, {minWidth: 100, width: '30%', height: '30%', minHeight: 100}]}>
            <Image style={GlobalStyles.images} source={LogoTSE}/>
        </View>
        <View style={LogoComTextoStyles.viewTextLogo}>
            <Text style={
                [GlobalStyles.textWhiteBold,
                    {fontFamily: 'Coolvetica',
                    fontSize: 25 }]}>Tribunal Superior Eleitoral</Text>
        </View>
        </>
    )
}

