import { View, StyleSheet  } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
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
    },
    flexItemA: {
      flexGrow: 0,
      flexShrink: 1,
      alignItems: 'flex-start',
      paddingRight: 5,
      gap: 10
  },
  });

const ReviewItem = ({ review, showRepo = false }) => {
    const getname = review.id
    const parts = getname.split('.')
    const repoDetails = `${parts[parts.length-2]}/${parts[parts.length-1]}`

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
        {showRepo 
        ? <Text color="textPrimary" fontWeight="bold">{repoDetails}</Text> 
        : <Text color="textPrimary" fontWeight="bold">{review.user.username}</Text> }
      <Text color="textTertiary">{reviewDate}</Text>
      <Text color="textPrimary">{review.text}</Text>
      </View>
    </View>
)
};

export default ReviewItem;