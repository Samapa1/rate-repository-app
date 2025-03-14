import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#FFFFFF',
      textTertiary: '#586069',
      textQuaternary: '#0366d6',
      primary: '#0366d6',
      tabBackground: '#24292e'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'Roboto',
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    box: {
        backgroundColor: '#0366d6',
        padding: 5,
        borderRadius: 3
    },
    redBox: {
      backgroundColor: '#d60935',
      padding: 5,
      borderRadius: 3
    },
  };
  
  export default theme;