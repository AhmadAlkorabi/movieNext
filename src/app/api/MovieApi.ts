

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = 'f63021d3914a382f3d9f1517d86505a8';

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (params) => ({
        url: `${
          params.genre === "fetchTopRated"
            ? "/movie/top_rated"
            : "trending/all/week"
          }?api_key=${API_KEY}`,
        params: {
          page:params.page,
        }
      }),
    }),
    getMovieById: builder.query({
      query: (params) => ({
        url: `/movie/${params.id}?api_key=${API_KEY}`,
      }),
    }),
    getMovieSearch: builder.query({
      query: (params) => ({
        url: `/search/movie?api_key=${API_KEY}`,
        params: {
          query: params.search,
          page:params.page
        }
      })
    })
  }),
});

export const { useGetMoviesQuery , useGetMovieByIdQuery , useGetMovieSearchQuery } = tmdbApi;
