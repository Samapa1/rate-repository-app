import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
    const [mutate, result] = useMutation(CREATE_USER);
  
    const createUser = async ({username, password }) => {
        const user = {
            username: username,
            password: password
        }
        const userResult = await mutate({variables: { user }})
        return userResult
    };
    const createdUser = [createUser, result]
    return createdUser
  };

export default useCreateUser