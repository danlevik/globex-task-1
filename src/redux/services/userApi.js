import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => "" }),

    getUser: builder.query({
      query: (term) => `?term=${term}`,
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
