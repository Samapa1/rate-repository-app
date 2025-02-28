import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(SIGN_IN);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        }
        const signInResult = await mutate({variables: { credentials }})
        await authStorage.setAccessToken(signInResult.data.authenticate.accessToken);
        apolloClient.resetStore();
        return signInResult
    };
    const signInResult = [signIn, result]
    return signInResult
  };

export default useSignIn

