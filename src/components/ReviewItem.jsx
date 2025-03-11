import { View, StyleSheet, Pressable, Alert  } from 'react-native';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

import useDeleteReview from '../hooks/useDeleteReview';

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
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 10
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
  let navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  
  const formatDate = (createdAt) => {
    const formatteddate = new Date(createdAt);
    return formatteddate.toLocaleDateString();
  };

  const reviewDate = formatDate(review.createdAt)

  const handleView = () => {
    navigate(`/${review.repositoryId}`)
  }

  const removeReview = async () => {
    console.log("remove")
    try {
      console.log(review.id)
      const { data } = await deleteReview(review.id)
      console.log(data)
    } catch(e) {
      console.log(e)
    }
  }


  const handleDelete = async () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => removeReview()},
    ]);
  }

 

  return (
    <View style={styles.container}>
      <View style= {styles.flexItemA}>
        <View style={styles.roundContainer}>
          <Text color="textQuaternary" fontWeight="bold">{review.rating}</Text>
        </View>
      </View>
      <View style= {styles.flexItemA}>
        {showRepo 
        ? <Text color="textPrimary" fontWeight="bold">{review.repositoryId}</Text> 
        : <Text color="textPrimary" fontWeight="bold">{review.user.username}</Text> }
        <Text color="textTertiary">{reviewDate}</Text>
        <Text color="textPrimary">{review.text}</Text>
        {showRepo 
          ?  
          <View style= {styles.buttonContainer}>
            <View style= {[theme.box, {padding: 10}]}>
              <Pressable onPress={() => handleView()}>
                <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>View Repository</Text>
              </Pressable>
            </View>
            <View style= {[theme.redBox, {padding: 10}]}>
              <Pressable onPress={() => handleDelete()}>
                <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>Delete review</Text>
              </Pressable>
            </View>
          </View>
        : null }
         
      </View>

    </View>
)
};

export default ReviewItem;