import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.tabBackground,
    flexGrow: 0
    // ...
  },
  flexItemA: {
    padding: 20,
    backgroundColor: theme.colors.tabBackground,
    flexGrow: 0
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.flexItemA}>
              <AppBarTab name= {'Repositories'} route={'/'}></AppBarTab>
          </View>
          <View style={styles.flexItemA}>
            <AppBarTab name= {'Log in'} route={'/signin'}></AppBarTab>
          </View>
        </ScrollView>
      </View>
    </View>
  )
  
};

export default AppBar;



