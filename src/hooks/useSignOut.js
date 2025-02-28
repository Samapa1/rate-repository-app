import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignOut = async () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    console.log("useSignOut")
    await authStorage.removeAccessToken()
    apolloClient.resetStore();

}

export default useSignOut