import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiData = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://reqres.in/api`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getApiData: build.query({
      query: (pageNumber:string) => ({
        url: `/products?page=${Number(pageNumber) + Number(1)}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetApiDataQuery
} = apiData;
