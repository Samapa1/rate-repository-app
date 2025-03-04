import { View, StyleSheet } from 'react-native';
import {useParams} from 'react-router-native'
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
    },
    flexItemB: {
      flexGrow: 0,
    },
  });


const SingleRepository = () => {
    let { id } = useParams()
    

    const { repositories } = useRepositories();
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const repoToShow = repositoryNodes.find(repo => repo.id === id)
    console.log(repoToShow)

    return (
        <View style={styles.flexItemB}> 
            <RepositoryItem item={repoToShow} showButton= {"true"}/>
        </View>
    )
}

export default SingleRepository