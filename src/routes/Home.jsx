// 폴더 생성 : mkdir src/routes
// 파일 생성 : touch src/routes/Home.jsx

// function Home() {
//   return <div>Home</div>;
// }

import React from 'react';
// eslint-disable-next-line
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return <h1>Home</h1>;
};
