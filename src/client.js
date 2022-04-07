import { ApolloClient, InMemoryCache } from "@apollo/client";
const { createUploadLink } = require("apollo-upload-client");

const apolloCache = new InMemoryCache();

const uploadLink = createUploadLink({
  //uri: "https://dev2-sz-monolith.herokuapp.com/graphql",
  uri: "https://dev-sz-monolith.herokuapp.com/graphql",
  //uri: "http://localhost:5100/graphql",
  headers: {
    "keep-alive": "true",
    Authorization:
    "Bearer <ENTER BEARER TOKEN>",
  },
});

export const client = new ApolloClient({
  cache: apolloCache,
  link: uploadLink,
});
