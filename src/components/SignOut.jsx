import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
    let navigate = useNavigate();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const handleSignOut = async () => {
        try {
            await authStorage.removeAccessToken()
            apolloClient.resetStore();
        } catch (e) {
            console.log(e)
        }
    
    }
    
    useEffect(() => {
        handleSignOut()
        navigate("/")
    }, []);
}

export default SignOut

