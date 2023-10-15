const gql = require("graphql-tag");
//gql gives template literal of GraphQL strings that can be readable by the Apollo libraries.
//GraphQL provides core logic for parsing & validating the GraphQL queries.
//"query" is the entry point to the rest of the schema. It is to fetch the data for all kinds.
const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
   
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
   
  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
 
module.exports = typeDefs;