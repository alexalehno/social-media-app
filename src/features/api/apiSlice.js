import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),

    getUsers: builder.query({
      query: () => '/users',
    }),

    getComments: builder.query({
      query: () => '/comments',
    }),

  })
})

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetCommentsQuery
} = apiSlice;