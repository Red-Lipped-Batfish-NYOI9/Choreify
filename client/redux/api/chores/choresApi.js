import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const choresApi = createApi({
  reducerPath: 'choresApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    getAllChores: builder.query({
      query: () => '/chores',
    }),
    // saveNewChore: builder.query({
    //   query: () => `/chores`,
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllChoresQuery } = choresApi;
console.log('choresApi ', choresApi);
console.log('useGetAllChoresQuery ', useGetAllChoresQuery);
