import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planet } from '../utils/types';
import { HYDRATE } from 'next-redux-wrapper';

type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return (action.payload as any)[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPlanets: builder.query<PlanetsResponse, { search: string; page?: string }>({
      query: ({ search, page }) => {
        return page ? `?search=${search}&page=${page}` : `?search=${search}`;
      },
    }),
  }),
});

export const {
  useGetPlanetsQuery,
  util: { getRunningQueriesThunk },
} = planetsApi;

export const { getPlanets } = planetsApi.endpoints;
