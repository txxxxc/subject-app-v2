import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Course = {
   __typename?: 'Course',
  id: Scalars['ID'],
  course_name: Scalars['String'],
  block: Scalars['String'],
  teacher_name: Scalars['String'],
  room: Scalars['String'],
  is_compulsory: Scalars['Boolean'],
};

export type Query = {
   __typename?: 'Query',
  findUser?: Maybe<User>,
  test?: Maybe<Course>,
  searchCoursesByName?: Maybe<Array<Maybe<Course>>>,
  searchCoursesByTeacher?: Maybe<Array<Maybe<Course>>>,
  searchCoursesByBlock?: Maybe<Array<Maybe<Course>>>,
  searchCoursesByCompulsory?: Maybe<Array<Maybe<Course>>>,
};


export type QuerySearchCoursesByNameArgs = {
  course_name: Scalars['String']
};


export type QuerySearchCoursesByTeacherArgs = {
  teacher_name: Scalars['String']
};


export type QuerySearchCoursesByBlockArgs = {
  block: Scalars['String']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  name: Scalars['String'],
};


