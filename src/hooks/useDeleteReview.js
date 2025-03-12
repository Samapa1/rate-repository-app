import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries';

const useDeleteReview = () => {
    const [mutate, result ] = useMutation(DELETE_REVIEW, {
      refetchQueries: [
        {query: GET_ME,
        variables: {includeReviews: true}}
      ],
    });

    const deleteReview = async (id) => {
        const reviewResult = await mutate({variables: {id} })
        return reviewResult
    };
    const deleteResult = [deleteReview, result]
    return deleteResult
  };

export default useDeleteReview

