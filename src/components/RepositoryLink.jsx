import { StyleSheet, Pressable, View } from "react-native"
import * as Linking from 'expo-linking';
import useRepository from "../hooks/useRepository"
import theme from "../theme"
import Text from "./Text"

const RepositoryLink = ({item}) => {

    const styles = StyleSheet.create({
        buttonContainer: {
            flexGrow: 1,
            flexShrink: 1,
            marginLeft: 20,
            marginRight: 20,
            alignItems: 'stretch'
        },
    })
    
    const  { repository } = useRepository( {id: item.id})
        
    const openUrl = async ( url ) => {
        await Linking.openURL(url)
    }
    
    return (
        <View style= {styles.buttonContainer}>
            <View style= {[theme.box, {padding: 10}, {borderRadius: 3}]}>
                <Pressable onPress={() => openUrl (repository?.url)}>
                    <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>Open in Github</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RepositoryLink