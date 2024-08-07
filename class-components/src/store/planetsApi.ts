import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planet } from '../utils/types';
import { HYDRATE } from 'next-redux-wrapper';
import { UnknownAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets/' }),
  extractRehydrationInfo(action: UnknownAction, { reducerPath }): any {
    if (action.type === HYDRATE) {
      const payload = action.payload as { [key: string]: RootState };
      return payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPlanets: builder.query<PlanetsResponse, { search: string; page?: string | null }>({
      query: ({ search, page }) => {
        if (page) {
          return `?search=${search}&page=${page}`;
        } else {
          return `?search=${search}`;
        }
      },
    }),
  }),
});

export const {
  useGetPlanetsQuery,
  util: { getRunningQueriesThunk },
} = planetsApi;
