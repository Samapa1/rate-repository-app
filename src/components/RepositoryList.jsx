import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from "react-router";
import { useState } from 'react';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';
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
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'transparent'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ( { selectedCriteria, setSelectedCriteria, keyWord, setKeyword}) => {
  return (
    <View style={[{backgroundColor: '#dedfe0'}, {borderBottomColor: 'transparent'}]}>
      <Searchbar  
        style= {{
          backgroundColor: 'white', 
          margin: 10,
          borderBottomColor: 'transparent'
        }}
        placeholder="Search"
        onChangeText={setKeyword}
        value={keyWord}
        mode= 'view'
      />
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
  const [keyWord, setKeyword] = React.useState('')
  const [debounced] = useDebounce(keyWord, 500);

  let orderVariables = {
    orderBy: "CREATED_AT", 
    orderDirection: "DESC",
    searchKeyword: debounced,
  }

  if (selectedCriteria === "latest") {
    orderVariables = {
      orderBy: "CREATED_AT", 
      orderDirection: "DESC",
      searchKeyword: debounced
    }
  }
  else if (selectedCriteria === "highest") {
    orderVariables = {
      orderBy: "RATING_AVERAGE", 
      orderDirection: "DESC",
      searchKeyword: debounced
    }
  }
  else if (selectedCriteria === "lowest") {
    orderVariables = {
      orderBy: "RATING_AVERAGE", 
      orderDirection: "ASC",
      searchKeyword: debounced
    }
  }

  const { repositories } = useRepositories( orderVariables);
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handleNavigate = (item) => {
    console.log(item.id)
    navigate(`/${item.id}`)
  }

  return (
    <View>
    <FlatList
      ListHeaderComponent=
        {<ListHeader 
          selectedCriteria= {selectedCriteria} 
          setSelectedCriteria={setSelectedCriteria}
          keyWord={keyWord}
          setKeyword={setKeyword}
        />}
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


