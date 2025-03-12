import { View, StyleSheet, FlatList } from 'react-native';
import {useParams} from 'react-router-native'
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    flexItemB: {
      flexGrow: 0,
    },
    separator: {
      height: 10,
      backgroundColor: '#dedfe0',
    },
  });

  
const RepositoryInfo = ( {repository }) => {
    return (
        <View style={styles.flexItemB}> 
            <RepositoryItem item={repository} showButton= {"true"}/>
        </View>
    )
};

const SingleRepository = () => {
  let { id } = useParams()

  let itemId = id
  
  const { repositories } = useRepositories({
    orderBy: "CREATED_AT", 
    orderDirection: "DESC"
  });
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  const repoToShow = repositoryNodes.find(repo => repo.id === id)

  const variables= {
    id: itemId,
    first: 3
  }
  
  const  { repository, fetchMore  } = useRepository( variables )

  const reviewNodes = repository
  ? repository.reviews.edges.map(edge => edge.node)
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };
  
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repoToShow}/>}
      ListFooterComponent={<View style={{height: 100}}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;

