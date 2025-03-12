import { StyleSheet, View, ScrollView } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Review from './Review';
import Register from './Register';
import MyReviews from './MyReviews';

import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexItemB: {
    // flexGrow: 0,
    flex: 1
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
        <Route path="/:id" element={ 
            <View style={{ flexGrow: 1 }}>
            <SingleRepository/>
            </View>
          } />
        <Route path="/signin" element={
          <View style={styles.flexItemB}>
          <SignIn/>
          </View>
          } />
         <Route path="/signout" element={
          <View style={styles.flexItemB}>
          <SignOut/>
          </View>
          } />
          <Route path="/review" element={
            <View  style={styles.flexItemB}>
              <Review/>
            </View>
          } />
           <Route path="/register" element={
            <View style={styles.flexItemB}>
              <Register/>
            </View>
          } />
          <Route path="/myreviews" element={
            <View style={styles.flexItemB}>
              <MyReviews/>
            </View>
          } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;



