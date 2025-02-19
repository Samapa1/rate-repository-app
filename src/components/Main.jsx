import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  flexItemB: {
    flexGrow: 0,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar></AppBar>
        <View style={styles.flexItemB}>
            <RepositoryList/>
        </View>
    </View>
  );
};

export default Main;


