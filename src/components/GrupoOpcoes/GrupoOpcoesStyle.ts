
import { StyleSheet } from 'react-native'

export const GrupoOpcoesStyles = StyleSheet.create({

    container: {
        width: '100%',
        height: 'auto',
        padding: 15,
        marginTop: 14,
        gap: 20   
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        gap: 25,
        paddingTop: 5,
        paddingBottom: 5
    },

    viewIcon: {
        height: 17,
        width: 17,
        marginLeft: 15
    },

    rowViewText: {
        width: '85%',
        height: '100%',
        gap: 1,
    }, 

    rowTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8e8585'
    },

    rowDesc: {
        fontSize: 15,
        flexWrap: 'nowrap',
        color: '#8e8585'
    }


})