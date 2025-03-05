import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
  
    const createReview = async ({ owner, repository, rating, reviewText }) => {
        const review = {
            ownerName: owner,
            repositoryName: repository,
            rating: Number(rating),
            text: reviewText
        }
        const reviewResult = await mutate({variables: { review }})
        return reviewResult
    };
    const createdReview = [createReview, result]
    return createdReview
  };

export default useCreateReview