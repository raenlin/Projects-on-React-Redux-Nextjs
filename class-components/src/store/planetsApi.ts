import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planet } from '../utils/types';

type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export const planetsApi = createApi({
  reducerPath: 'planentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets/' }),
  endpoints: (build) => ({
    getPlanets: build.query<PlanetsResponse, { search: string; page: number }>({
      query: ({ search, page }) => `?search=${search}&page=${page}`,
    }),
  }),
});
