import { StyleSheet, View, ScrollView } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

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
      <AppBar />
      <Routes>
        <Route path="/" element={
          <View id='repoList' style={styles.flexItemB}>
          <RepositoryList/>
          </View>
          } />
        <Route path="/signin" element={
          <View style={styles.flexItemB}>
          <SignIn/>
          </View>
          } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;


// const Main = () => {
//   return (
//     <View style={styles.container}>
//         <AppBar></AppBar>
//         <View id='repoList' style={styles.flexItemB}>
//             <RepositoryList/>
//         </View>
//     </View>
//   );
// };


