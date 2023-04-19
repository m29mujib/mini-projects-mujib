import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://settled-mongoose-63.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'vgfX1cxXncicMeVIhTVcKS5TqcYkc2d2766uvxYOSCCpw1oD5IdoKhuuhFLqWqXS'
    }
})
export default client