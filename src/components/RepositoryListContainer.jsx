import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item}/>}
        />
    );
  };
  
  const RepositoryList = () => {
    const variables = {
      orderBy: "CREATED_AT", 
      orderDirection: "DESC"
    }
    const { repositories } = useRepositories(variables);
  
    // const { repositories } = useRepositories({
    //   orderBy: "CREATED_AT", 
    //   orderDirection: "DESC"
    // });
  
    return <RepositoryListContainer repositories={repositories} />;
  };
  
  export default RepositoryList;