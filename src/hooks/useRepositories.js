import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ( variables ) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES,{
      variables,
      fetchPolicy: 'cache-and-network',
      // Other options
    }
  );

  const handleFetchMore = () => {
    console.log(data?.repositories.pageInfo)
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };


  return { 
    repositories: data?.repositories, 
    fetchMore: handleFetchMore,
    error: error, 
    loading: loading,
    ...result 
  }

};

export default useRepositories;


