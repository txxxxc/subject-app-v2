import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    findUser: User!
    test: Course!
    searchCoursesByName(course_name: String!): [Course]
    searchCoursesByTeacher(teacher_name: String!): [Course]
    searchCoursesByBlock(block: String!): [Course]
    searchCoursesByCompulsory: [Course]
  }
  type User {
    id: ID!
    email: String!
    name: String!
    created_at: Int!
    updated_at: Int!
  }
  type Course {
    id: ID!
    course_name: String!
    block: String!
    teacher_name: String!
    room: String!
    is_compulsory: Boolean!
    created_at: Int!
    updated_at: Int!
  }
`;
