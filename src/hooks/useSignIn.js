import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';


const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        }
        console.log(credentials)
        return mutate({variables: { credentials }})
      // call the mutate function here with the right arguments
    };
    
    return [signIn, result];
  };

export default useSignIn

