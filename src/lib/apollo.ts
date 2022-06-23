import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ok43d00dze01xl3e38gqyv/master',
cache : new InMemoryCache()
});