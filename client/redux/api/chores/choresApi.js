import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { application } from 'express';

// Define a service using a base URL and expected endpoints
export const choresApi = createApi({
  reducerPath: 'choresApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    getAllChores: builder.query({
      query: () => '/chores',
    }),
    postData: builder.mutation({
      query: (data) => ({
        url: '/chores',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllChoresQuery } = choresApi;
console.log('choresApi ', choresApi);
console.log('useGetAllChoresQuery ', useGetAllChoresQuery);
