import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8080/api' }),
  endpoints: (builder) => ({
    getAllChores: builder.query({
      query: () => '/groups',
    }),
  }),
});

export const { getAllGroups } = groupsApi;
