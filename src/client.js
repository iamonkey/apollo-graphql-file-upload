import { ApolloClient, InMemoryCache } from "@apollo/client";
const { createUploadLink } = require("apollo-upload-client");

const apolloCache = new InMemoryCache();

console.log(`${process.env.BEARER_TOKEN}`);

const uploadLink = createUploadLink({
  //uri: "https://dev2-sz-monolith.herokuapp.com/graphql",
  uri: process.env.REACT_APP_GRAPHQL_URL,
  //uri: "http://localhost:5100/graphql",
  headers: {
    "keep-alive": "true",
    Authorization:
    `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});

export const client = new ApolloClient({
  cache: apolloCache,
  link: uploadLink,
});
