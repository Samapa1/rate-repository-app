import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ( {id} ) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
      variables: { id },
      fetchPolicy: 'cache-and-network',
      // Other options
    });

  return { repository: data?.repository, error: error, loading: loading }

};

export default useRepository;
