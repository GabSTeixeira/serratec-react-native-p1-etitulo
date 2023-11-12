import { StyleSheet } from 'react-native'

export const NavBarStyles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff'
    },

    column: {
        flexDirection: 'column',
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }, 

    viewIcons: {
        height: 30,
        width: 30  
    },
    
    columntext: {
        fontSize: 12,
    },

    selectedText: {
        color: '#546f89',
        fontWeight: 'bold'
    }
})