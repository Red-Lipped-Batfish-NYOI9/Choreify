import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/users`,
    }),
    postNewUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, usePostNewUserMutation } = usersApi;
