import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
 
export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://closing-crab-50.hasura.app/v1/graphql',
      headers: {
        Authorization: ``
      }
    }),
    cache: new InMemoryCache(),
  });
 };