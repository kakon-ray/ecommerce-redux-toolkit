import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
});

export const { useGetProductsByNameQuery } = productsApi;
