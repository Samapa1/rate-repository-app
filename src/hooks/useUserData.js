import { useQuery } from '@apollo/client';

import { GET_ME } from '../graphql/queries';

const useUserData = ( includeReviews ) => {
  const { data, error, loading } = useQuery(GET_ME,{
      variables: includeReviews ,
      fetchPolicy: 'cache-and-network',
      // Other options
    }
  );

  return { me: data?.me, error: error, loading: loading }

};

export default useUserData;