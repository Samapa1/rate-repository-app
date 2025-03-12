import { View, FlatList, StyleSheet } from 'react-native';
import useUserData from '../hooks/useUserData';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: '#dedfe0',
    },
  });

const onEndReach = () => {
    console.log('You have reached the end of the list');
};

const MyReviews = () => {
    const { me } = useUserData({
        includeReviews: true
    });

    const reviewNodes = me
    ? me.reviews.edges.map(edge => edge.node)
    : [];
    
    const ItemSeparator = () => <View style={styles.separator} />;
      
    return (
        <View>
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem review={item} showRepo={true}/>}
            keyExtractor={({ id }) => id}
            onEndReach={onEndReach}
            // ...
        />
        </View>
    )
}

export default MyReviews