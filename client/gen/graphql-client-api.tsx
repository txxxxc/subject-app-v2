import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
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
  findAllCourses?: Maybe<Array<Maybe<Course>>>,
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

export type FindAllCoursesQueryVariables = {};


export type FindAllCoursesQuery = (
  { __typename?: 'Query' }
  & { findAllCourses: Maybe<Array<Maybe<(
    { __typename?: 'Course' }
    & Pick<Course, 'course_name' | 'teacher_name' | 'block' | 'is_compulsory'>
  )>>> }
);

export type SearchCoursesByBlockQueryVariables = {
  block: Scalars['String']
};


export type SearchCoursesByBlockQuery = (
  { __typename?: 'Query' }
  & { searchCoursesByBlock: Maybe<Array<Maybe<(
    { __typename?: 'Course' }
    & Pick<Course, 'course_name' | 'teacher_name' | 'block' | 'is_compulsory'>
  )>>> }
);


export const FindAllCoursesDocument = gql`
    query findAllCourses {
  findAllCourses {
    course_name
    teacher_name
    block
    is_compulsory
  }
}
    `;

/**
 * __useFindAllCoursesQuery__
 *
 * To run a query within a React component, call `useFindAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCoursesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindAllCoursesQuery, FindAllCoursesQueryVariables>) {
        return ApolloReactHooks.useQuery<FindAllCoursesQuery, FindAllCoursesQueryVariables>(FindAllCoursesDocument, baseOptions);
      }
export function useFindAllCoursesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAllCoursesQuery, FindAllCoursesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindAllCoursesQuery, FindAllCoursesQueryVariables>(FindAllCoursesDocument, baseOptions);
        }
export type FindAllCoursesQueryHookResult = ReturnType<typeof useFindAllCoursesQuery>;
export type FindAllCoursesLazyQueryHookResult = ReturnType<typeof useFindAllCoursesLazyQuery>;
export type FindAllCoursesQueryResult = ApolloReactCommon.QueryResult<FindAllCoursesQuery, FindAllCoursesQueryVariables>;
export const SearchCoursesByBlockDocument = gql`
    query searchCoursesByBlock($block: String!) {
  searchCoursesByBlock(block: $block) {
    course_name
    teacher_name
    block
    is_compulsory
  }
}
    `;

/**
 * __useSearchCoursesByBlockQuery__
 *
 * To run a query within a React component, call `useSearchCoursesByBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoursesByBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoursesByBlockQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useSearchCoursesByBlockQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchCoursesByBlockQuery, SearchCoursesByBlockQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchCoursesByBlockQuery, SearchCoursesByBlockQueryVariables>(SearchCoursesByBlockDocument, baseOptions);
      }
export function useSearchCoursesByBlockLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchCoursesByBlockQuery, SearchCoursesByBlockQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchCoursesByBlockQuery, SearchCoursesByBlockQueryVariables>(SearchCoursesByBlockDocument, baseOptions);
        }
export type SearchCoursesByBlockQueryHookResult = ReturnType<typeof useSearchCoursesByBlockQuery>;
export type SearchCoursesByBlockLazyQueryHookResult = ReturnType<typeof useSearchCoursesByBlockLazyQuery>;
export type SearchCoursesByBlockQueryResult = ApolloReactCommon.QueryResult<SearchCoursesByBlockQuery, SearchCoursesByBlockQueryVariables>;