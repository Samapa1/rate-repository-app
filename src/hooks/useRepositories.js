import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      // Other options
    }
  );

  return { repositories: data?.repositories, error: error, loading: loading }

};

export default useRepositories;


