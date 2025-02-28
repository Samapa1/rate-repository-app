import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        }
        console.log(credentials)
        const signInResult = await mutate({variables: { credentials }})
        // console.log(signInResult.data.authenticate.accessToken)
        await authStorage.setAccessToken(signInResult.data.authenticate.accessToken);
        const retrievedToken = await authStorage.getAccessToken()
        console.log("retrievedToken")
        console.log(retrievedToken)
        return signInResult

        // return mutate({variables: { credentials }})
      // call the mutate function here with the right arguments
    };
    const signInResult = [signIn, result]
    // console.log(result)
    // await authStorage.getAccessToken();
    return signInResult
  };

export default useSignIn

