import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ( variables ) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
      variables,
      fetchPolicy: 'cache-and-network',
      // Other options
    });
  
  const handleFetchMore = () => {
    console.log(data?.repository.reviews)
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { 
    repository: data?.repository, 
    error: error, 
    loading: loading, 
    fetchMore: handleFetchMore, 
  }

};

export default useRepository;


// import { useQuery } from '@apollo/client';

// import { GET_REPOSITORY } from '../graphql/queries';

// const useRepository = ( {id} ) => {
//   const { data, error, loading } = useQuery(GET_REPOSITORY, {
//       variables: { id },
//       fetchPolicy: 'cache-and-network',
//       // Other options
//     });
  
//   return { repository: data?.repository, error: error, loading: loading }

// };

// export default useRepository;