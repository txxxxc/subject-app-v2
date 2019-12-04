import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const TEST = gql`
  {
    test {
      id
    }
  }
`;

const Test = () => {
  const { data, error, loading } = useQuery(TEST);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return <ul>{data.test.id}</ul>;
};

export default Test;
