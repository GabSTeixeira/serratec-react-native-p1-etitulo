import { StyleSheet } from 'react-native'

export const TopBarStyles = StyleSheet.create({

    fullContainer: {
        position: 'absolute',
        height: 110,
        width: '100%',
        top: 0,
        justifyContent: 'flex-end',
        backgroundColor: '#173057'
    },

    safeAreaContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        alignItems: 'center',
        gap: 40
    },

    viewIcon: {
        width: 20,
        height: 20,
        marginLeft: 18
    }


})