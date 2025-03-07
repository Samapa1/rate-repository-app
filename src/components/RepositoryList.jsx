import { FlatList, View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigate } from "react-router";
import { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#dedfe0',
  },
  header: {
    backgroundColor: '#dedfe0',
    height: 50,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ( { selectedCriteria, setSelectedCriteria}) => {
  return (
    <View>
    <Picker style={styles.header}
      selectedValue={selectedCriteria}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedCriteria(itemValue)
      }>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
    </View>
    )
}


const RepositoryList = () => {

  const [selectedCriteria, setSelectedCriteria] = useState("latest");

  let orderVariables = {
    orderBy: "CREATED_AT", 
    orderDirection: "DESC"
  }

  if (selectedCriteria === "latest") {
    orderVariables = {
      orderBy: "CREATED_AT", 
      orderDirection: "DESC"
    }
  }
  else if (selectedCriteria === "highest") {
    orderVariables = {
      orderBy: "RATING_AVERAGE", 
      orderDirection: "DESC"
    }
  }
  else if (selectedCriteria === "lowest") {
    orderVariables = {
      orderBy: "RATING_AVERAGE", 
      orderDirection: "ASC"
    }
  }

  const { repositories } = useRepositories( orderVariables);
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handleNavigate = (item) => {
    navigate(`/${item.id}`)
  }

  return (
    <View>
    <FlatList
      ListHeaderComponent={<ListHeader selectedCriteria= {selectedCriteria} setSelectedCriteria={setSelectedCriteria}/>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <Pressable onPress={() => handleNavigate(item)}>
          <RepositoryItem item={item} showButton={"false"}/>
        </Pressable>
      )}
    />
    </View>
  );
};


export default RepositoryList;

