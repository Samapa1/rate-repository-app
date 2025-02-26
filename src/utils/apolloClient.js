import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';


const createApolloClient = () => {
  return new ApolloClient({
    // uri: 'http://192.168.1.100:4000/graphql',
    // uri: 'http://192.168.50.220:4000/graphql',
    uri: Constants.expoConfig.extra.APOLLO_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;