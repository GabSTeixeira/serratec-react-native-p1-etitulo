import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },

    images: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },

    textWhiteBold: {
      color: '#ffffff',
      fontWeight: 'bold'
    },

    textBlackBold: {
      color: '#2f2f2f',
      fontWeight: 'bold'
    }
    
  });