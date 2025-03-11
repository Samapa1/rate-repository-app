import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
    console.log("deleteHook")
    const deleteReview = async (id) => {
        const reviewResult = await mutate({variables: {id} })
        return reviewResult
    };
    const deleteResult = [deleteReview, result]
    return deleteResult
  };

export default useDeleteReview

