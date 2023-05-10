import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://included-guinea-34.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'sz7amcZMQ3qHK01uNwhaEAlEX1KmkJGOZZ92XBdGEq4gytstxx8WLV1VB3HUgtJC'
    }
})
export default client