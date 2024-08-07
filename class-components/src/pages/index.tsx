import React, { ReactNode, useEffect } from 'react';
import Search from '../components/Search/search';
import Main from '../components/Main/main';
import { getRunningQueriesThunk, planetsApi } from '../store/planetsApi';
import { Planet } from '../utils/types';
import { pagePlanetsCount } from '../utils/constants';
import { wrapper } from '../store/store';
import { useRouter } from 'next/router';

type PlanetsApiResponse = {
  data: {
    count: number;
    results: Planet[];
  };
};

type PageProps = {
  children: ReactNode;
  data: PlanetsApiResponse;
};

export default function Page({ children, data }: PageProps) {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.search && !router.query.page) {
      router.push('/?search=&page=1');
    }
  }, [router]);

  const planetsCount: number | null = data ? data.data.count : null;
  const pagesCount: number = planetsCount !== null ? Math.ceil(planetsCount / pagePlanetsCount) : 0;
  const pages: number[] = pagesCount > 1 ? Array.from({ length: pagesCount }, (_, i) => i + 1) : [];

  return (
    <>
      <Search />
      <Main items={data.data.results} pages={pages} children={children} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const search = context.query.search || '';
  const page = context.query.page || '1';

  const data = await store.dispatch(
    planetsApi.endpoints.getPlanets.initiate({ search: search as string, page: page as string })
  );

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: { data },
  };
});
