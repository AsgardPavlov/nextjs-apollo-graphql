import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

let client: ApolloClient<any> | null = null

export const getClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri:
          process.env.APOLLO_SERVER_API ||
          process.env.NEXT_PUBLIC_APOLLO_SERVER_API
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        }
      }
    })
  }

  return client
}
