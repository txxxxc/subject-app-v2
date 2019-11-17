import { GraphQLResolveInfo } from 'graphql';
import { DataSources } from '../dataSource';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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


export type Query_SearchCoursesByNameArgs = {
  course_name: Scalars['String']
};


export type Query_SearchCoursesByTeacherArgs = {
  teacher_name: Scalars['String']
};


export type Query_SearchCoursesByBlockArgs = {
  block: Scalars['String']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  name: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Course: ResolverTypeWrapper<Course>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Course: Course,
  Boolean: Scalars['Boolean'],
};

export type CourseResolvers<ContextType = DataSources, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  course_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  block?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  teacher_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  room?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  is_compulsory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = DataSources, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  test?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType>,
  searchCoursesByName?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType, RequireFields<Query_SearchCoursesByNameArgs, 'course_name'>>,
  searchCoursesByTeacher?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType, RequireFields<Query_SearchCoursesByTeacherArgs, 'teacher_name'>>,
  searchCoursesByBlock?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType, RequireFields<Query_SearchCoursesByBlockArgs, 'block'>>,
  searchCoursesByCompulsory?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = DataSources, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = DataSources> = {
  Course?: CourseResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = DataSources> = Resolvers<ContextType>;
