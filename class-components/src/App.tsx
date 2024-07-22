import './App.css';
import { useState } from 'react';
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';
import Header from './view/Header/header';
import Search from './view/Search/search';
import Main from './view/Main/main';
import ErrorBoundary from './components/Errorboundary';
import Footer from './view/Footer/footer';
import { Planet } from './utils/types';
import { pagePlanetsCount } from './utils/constants';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './view/404/404';
import CardDetails from './components/Card/CardDetail';
import { planetsApi } from './store/planetsApi';

export function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [query, setQuery] = useQueryParams({
    search: StringParam,
    page: NumberParam,
  });

  const { data, error, isLoading } = planetsApi.useGetPlanetsQuery({
    search: searchInput ? searchInput : '',
    page: query.page ? query.page : 1,
  });
  const items: Planet[] = data ? data.results : [];

  const planetsCount: number = data ? data.count : 0;
  const pagesCount = Math.ceil(planetsCount / pagePlanetsCount);
  const pages: number[] = searchInput ? [] : Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handleFetchData = (searchInput: string) => {
    setSearchInput(searchInput.trim());
  };

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ErrorBoundary>
      <Header name="Star Wars Planets" />
      <Search onSearch={handleFetchData} setquery={setQuery} />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Main items={items} pages={pages} setquery={setQuery} query={query.page} />}
          >
            <Route path="/planets/:id" element={<CardDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      )}
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
