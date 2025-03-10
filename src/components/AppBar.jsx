import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import useUserData from '../hooks/useUserData';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.tabBackground,
    flexGrow: 0,
    flexShrink: 1
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
  const { me } = useUserData();
  console.log(me)
  
  return (
    <View>
         {me ? 
            <View style={styles.container}>
            <ScrollView horizontal>
              <View style={styles.flexItemA}>
                <AppBarTab name= {'Repositories'} route={'/'}></AppBarTab>
              </View>
              <View style={styles.flexItemA}>
                <AppBarTab name= {'Create a review'} route={'/review'}></AppBarTab>
              </View>
              <View style={styles.flexItemA}>
                <AppBarTab name= {'My reviews'} route={'/myReviews'}></AppBarTab>
              </View>
              <View style={styles.flexItemA}>
                <AppBarTab name= {'Sign out'} route={'/signout'}></AppBarTab>
              </View>
              </ScrollView>
             </View>
          : 
          <View style={styles.container}>
          <ScrollView horizontal>
            <View style={styles.flexItemA}>
              <AppBarTab name= {'Repositories'} route={'/'}></AppBarTab>
            </View>
            <View style={styles.flexItemA}>
              <AppBarTab name= {'Sign in'} route={'/signin'}></AppBarTab>
            </View>
             <View style={styles.flexItemA}>
              <AppBarTab name= {'Sign up'} route={'/register'}></AppBarTab>
            </View>
            </ScrollView>
           </View>
          }
      </View>
  )
  
};

export default AppBar;



