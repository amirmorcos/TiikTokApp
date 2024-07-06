import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SigninFormData } from "./types";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serverless.vibez.app/interviews/home_assignment_v2/",
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<void, SigninFormData>({
      query: (data) => ({
        url: "login",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useSigninMutation } = authenticationApi;
