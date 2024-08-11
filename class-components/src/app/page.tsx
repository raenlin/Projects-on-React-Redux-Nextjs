import Search from '../components/Search/search';
import { pagePlanetsCount } from '../utils/constants';
import Main from '../components/Main/main';
import { PlanetsResponse, searchParamsType } from '../utils/types';
import { ReactNode } from 'react';

export default async function Home({
  searchParams,
  children,
}: {
  searchParams: searchParamsType;
  children: ReactNode;
}) {
  const page = searchParams.page || '1';
  const search = searchParams.search || '';
  const res = await fetch(`https://swapi.dev/api/planets/?search=${search}&page=${page}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Something went wrong...');
  }
  const data: PlanetsResponse = await res.json();
  const planetsCount = data ? data.count : [];
  const pagesCount = typeof planetsCount === 'number' ? planetsCount / pagePlanetsCount : 0;
  const pages = pagesCount > 1 ? Array.from({ length: pagesCount }, (_, i) => i + 1) : [];

  return (
    <>
      <Search />
      {data && <Main items={data.results} pages={pages} children={children} />}
    </>
  );
}
