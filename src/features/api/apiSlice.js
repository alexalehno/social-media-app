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
      query: ()=> '/users',
    }),

  })
})

export const { useGetPostsQuery, useGetUsersQuery } = apiSlice;