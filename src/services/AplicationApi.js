// src/services/appApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["App"],

  endpoints: (builder) => ({
    apps: builder.query({
      query: () => "/apps",
      providesTags: ["App"],
    }),
    app: builder.query({
      query: (id) => `/apps/${id}`,
      providesTags: ["App"],
    }),
    addApp: builder.mutation({
      query: (app) => ({
        url: "/apps",
        method: "POST",
        body: app,
      }),
      invalidatesTags: ["App"]
    }),
    updateApp: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/apps/${id}`,
        method: "PUT",
        body: rest,
      }),
        invalidatesTags: ["App"]
    }),
    deleteApp: builder.mutation({
      query: (id) => ({
        url: `/apps/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["App"]
    }),
  }),
});
// src/services/appApi.js
export const {
  useAppsQuery,
  useAppQuery,
  useAddAppMutation,
  useUpdateAppMutation,
  useDeleteAppMutation,
} = appApi;
