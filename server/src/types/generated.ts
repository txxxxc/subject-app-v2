import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { MyContext } from './datasources';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  course_name: Scalars['String'];
  block: Scalars['String'];
  teacher_name: Scalars['String'];
  room: Scalars['String'];
  is_compulsory: Scalars['Boolean'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findUser: User;
  test: Course;
  search: Search;
};

export type Search = {
  __typename?: 'Search';
  searchCoursesByName: Array<Maybe<Course>>;
  searchCoursesByTeacher: Array<Maybe<Course>>;
  searchCoursesByBlock: Array<Maybe<Course>>;
  searchCoursesByCompulsory: Array<Maybe<Course>>;
};

export type Search_SearchCoursesByNameArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Search_SearchCoursesByTeacherArgs = {
  teacher_name?: Maybe<Scalars['String']>;
};

export type Search_SearchCoursesByBlockArgs = {
  block?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Course: ResolverTypeWrapper<Course>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Search: ResolverTypeWrapper<Search>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Course: Course;
  Boolean: Scalars['Boolean'];
  Search: Search;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
}>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = MyContext,
  Args = {
    maxAge?: Maybe<Maybe<Scalars['Int']>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CourseResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  course_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teacher_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_compulsory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  findUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Course'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['Search'], ParentType, ContextType>;
}>;

export type SearchResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['Search'] = ResolversParentTypes['Search']
> = ResolversObject<{
  searchCoursesByName?: Resolver<
    Array<Maybe<ResolversTypes['Course']>>,
    ParentType,
    ContextType,
    Search_SearchCoursesByNameArgs
  >;
  searchCoursesByTeacher?: Resolver<
    Array<Maybe<ResolversTypes['Course']>>,
    ParentType,
    ContextType,
    Search_SearchCoursesByTeacherArgs
  >;
  searchCoursesByBlock?: Resolver<
    Array<Maybe<ResolversTypes['Course']>>,
    ParentType,
    ContextType,
    Search_SearchCoursesByBlockArgs
  >;
  searchCoursesByCompulsory?: Resolver<
    Array<Maybe<ResolversTypes['Course']>>,
    ParentType,
    ContextType
  >;
}>;

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Course?: CourseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Search?: SearchResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = MyContext> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = MyContext> = DirectiveResolvers<
  ContextType
>;
import gql from 'graphql-tag';
