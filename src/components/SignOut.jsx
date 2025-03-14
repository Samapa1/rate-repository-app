import useSignOut from "../hooks/useSignOut"
import { useNavigate } from "react-router";

const SignOut = () => {
    let navigate = useNavigate();

    try {
        useSignOut()
        navigate("/")
    } catch (e) {
        console.log(e)
    }


}

export default SignOut