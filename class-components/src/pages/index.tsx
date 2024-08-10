import React, { ReactNode } from 'react';
import Search from '../components/Search/search';
import Main from '../components/Main/main';
import { useGetPlanetsQuery } from '../store/planetsApi';
import { Planet } from '../utils/types';
import { pagePlanetsCount } from '../utils/constants';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/query';
import { fetchData } from '../utils/api';

type PlanetsApiResponse = {
  count: number;
  results: Planet[];
};

export const getServerSideProps = fetchData;

export default function Page({ children }: { children: ReactNode }) {
  const router = useRouter();
  const search = router.query.search || '';
  const page = router.query.page || '1';

  const planetsData = useGetPlanetsQuery(
    { search: search as string, page: page as string } ?? skipToken
  );

  if (!planetsData) {
    return;
  }

  const { results } = planetsData.data as PlanetsApiResponse;

  const planetsCount = planetsData ? planetsData.data?.count : [];
  const pagesCount = typeof planetsCount === 'number' ? planetsCount / pagePlanetsCount : 0;
  const pages = pagesCount > 1 ? Array.from({ length: pagesCount }, (_, i) => i + 1) : [];

  return (
    <>
      <Search />
      {results && <Main items={results} pages={pages} children={children} />}
    </>
  );
}
