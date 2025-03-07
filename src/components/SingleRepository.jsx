import { View, StyleSheet, FlatList } from 'react-native';
import {useParams} from 'react-router-native'
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from './Text';


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
    },
    flexItemB: {
      flexGrow: 0,
    },
    separator: {
      height: 10,
      backgroundColor: '#dedfe0',
    },
    roundContainer: {
      display: 'flex',
      borderColor: '#0366d6',
      borderStyle: 'solid',
      borderRadius: 25,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
    },
    container: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 10,
      flexGrow: 1,
      flexShrink: 1,
  },
    container2: {
      margin: 20,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 30,
      flexGrow: 1,
      flexShrink: 1,
  },
    flexItemA: {
      flexGrow: 0,
      flexShrink: 1,
      alignItems: 'flex-start',
      paddingRight: 5,
      gap: 10
  },
  });

  
const RepositoryInfo = ( {repository }) => {
    return (
        <View style={styles.flexItemB}> 
            <RepositoryItem item={repository} showButton= {"true"}/>
        </View>
    )
};

const ReviewItem = ({ review }) => {

  const formatDate = (createdAt) => {
    const formatteddate = new Date(createdAt);
    return formatteddate.toLocaleDateString();
  };

  const reviewDate = formatDate(review.createdAt)


  return (
    <View style={styles.container}>
      <View style= {styles.flexItemA}>
        <View style={styles.roundContainer}>
          <Text color="textQuaternary" fontWeight="bold">{review.rating}</Text>
        </View>
      </View>
      <View style= {styles.flexItemA}>
      <Text color="textPrimary" fontWeight="bold">{review.user.username}</Text>
      <Text color="textTertiary">{reviewDate}</Text>
      <Text color="textPrimary">{review.text}</Text>
      </View>
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

  const  { repository } = useRepository( {id: itemId})

  const reviewNodes = repository
  ? repository.reviews.edges.map(edge => edge.node)
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;
  
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repoToShow}/>}
      // ...
    />
  );
};

export default SingleRepository;

