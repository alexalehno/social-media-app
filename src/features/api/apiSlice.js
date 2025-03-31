import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ limit, page }) => `/posts?_limit=${limit}&_page=${page}`,
      transformResponse: (response, meta) => {
        const totalCount = meta.response.headers.get('x-total-count');
        return { posts: response, totalCount };
      },
    }),

    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),

    getUsers: builder.query({
      query: () => '/users',
      transformResponse: (response) => {
        return usersAdapter.setAll(initialState, response);
      },
    }),

    getUserPosts: builder.query({
      query: (userId) => `/users/${userId}/posts`,
    }),

    getPostComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
    }),
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
  useGetUserPostsQuery,
  useGetPostCommentsQuery
} = apiSlice;

const selectUsersResult = apiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUsersResult,
  result => result.data ?? initialState
)

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById
} = usersAdapter.getSelectors(selectUsersData);
