import React, { ReactNode, useEffect } from 'react';
import Search from '../components/Search/search';
import Main from '../components/Main/main';
import { getRunningQueriesThunk, planetsApi, useGetPlanetsQuery } from '../store/planetsApi';
import { Planet } from '../utils/types';
import { pagePlanetsCount } from '../utils/constants';
import { wrapper } from '../store/store';
import { useRouter } from 'next/router';

export default function Page({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.search && !router.query.page) {
      router.push('/?search=&page=1');
    }
  }, [router]);

  const search = router.query.search as string;
  const page = router.query.page as string;

  const { data } = useGetPlanetsQuery({ search, page });

  const items: Planet[] = data ? data.results : [];
  const planetsCount: number | null = data ? data.count : null;
  const pagesCount: number = planetsCount !== null ? Math.ceil(planetsCount / pagePlanetsCount) : 0;
  const pages: number[] = pagesCount > 1 ? Array.from({ length: pagesCount }, (_, i) => i + 1) : [];

  return (
    <>
      <Search />
      <Main items={items} pages={pages} children={children} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const search = context.query.search as string;
  const page = context.query.page ? (context.query.page as string) : null;

  await store.dispatch(planetsApi.endpoints.getPlanets.initiate({ search, page }));

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
