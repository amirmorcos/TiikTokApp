import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SigninFormData } from "./types";
import { User } from "@/models/User";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serverless.vibez.app/api/interviews/home_assignment_v2/",
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<User, SigninFormData>({
      query: (data) => ({
        url: "login",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useSigninMutation } = authenticationApi;
