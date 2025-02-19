import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = (props) => {
    return (
        <Pressable onPress={() => console.log("you pressed!")}>
        <Text fontWeight="bold" color="textSecondary">Repositories</Text>
        </Pressable>
    )
}

export default AppBarTab