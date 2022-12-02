import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/clb5hrcdp083e01ukaof05muj/master",
  cache: new InMemoryCache(),
});

export default client;
