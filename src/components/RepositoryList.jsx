import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from "react-router";
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handleNavigate = (item) => {
    navigate(`/${item.id}`)
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <Pressable onPress={() => handleNavigate(item)}>
          <RepositoryItem item={item} showButton={"false"}/>
        </Pressable>
      )}
    />
  );
};


export default RepositoryList;

