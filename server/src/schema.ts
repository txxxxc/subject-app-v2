import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    findUser: User
  }
  type User {
    id: ID!
    email: String
    name: String
    created_at: Int
    updated_at: Int
  }
`;
