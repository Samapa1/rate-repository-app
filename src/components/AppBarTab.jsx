import { View } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';

const AppBarTab = (props) => {
    return (
        <View>
            <Link to= {props.route}><Text fontWeight="bold" color= 'textSecondary'>{props.name}</Text></Link>
        </View>
    )
}

export default AppBarTab