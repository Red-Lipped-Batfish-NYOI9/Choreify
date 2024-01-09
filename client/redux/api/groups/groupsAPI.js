import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    getAllGroups: builder.query({
      query: () => '/groups',
    }),
    postNewGroup: builder.mutation({
      query: (data) => ({
        url: '/createNewGroup',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useGetAllGroupsQuery, usePostNewGroupMutation } = groupsApi;
