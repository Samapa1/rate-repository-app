import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  flexItemA: {
    marginTop: Constants.statusBarHeight,
    // paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: theme.colors.tabBackground,
    flexGrow: 0
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.flexItemA}>
    <AppBarTab></AppBarTab>
    {/* ... */}</View>;
};

export default AppBar;