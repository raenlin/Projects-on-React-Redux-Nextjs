import './App.css';
import { useState, useEffect } from 'react';
import Header from './view/Header/Header';
import Search from './view/Search/Search';
import Main from './view/Main/Main';
import { fetchData, fetchPages } from './services/api';
import ErrorBoundary from './components/Errorboundary';
import Footer from './view/Footer/Footer';
import { Planet } from './utils/types';
import { pagePlanetsCount } from './utils/constants';

export function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [items, setItems] = useState<Planet[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [planetsCount, setPlanetsCount] = useState<number>(1);

  const pagesCount = Math.ceil(planetsCount / pagePlanetsCount);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleFetchData = async (searchInput: string) => {
    try {
      setFetching(true);
      const data = await fetchData(searchInput);
      setSearchInput(searchInput.trim());
      setCurrentPage(1);
      setItems(data);
      setError(null);
      localStorage.setItem('searchPlanet', searchInput.trim());
    } catch (error) {
      setItems([]);
      setError(error as Error);
    } finally {
      setFetching(false);
    }
  };

  const handleFetchPages = async (currentPage: number) => {
    try {
      setFetching(true);
      const data = await fetchPages(currentPage);
      setItems(data.results);
      setPlanetsCount(Number(data.count));
      setError(null);
    } catch (error) {
      setItems([]);
      setError(error as Error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    const savedSearch = localStorage.getItem('searchPlanet');
    if (savedSearch) {
      handleFetchData(savedSearch);
    }
    handleFetchPages(currentPage);
  }, [currentPage]);

  if (error) {
    return <p>Error {error.message}</p>;
  }

  return (
    <ErrorBoundary>
      <Header name="Star Wars Planets" />
      <Search onSearch={handleFetchData} />
      {fetching ? (
        <div className="loader"></div>
      ) : (
        <>
          <Main
            items={items}
            pages={searchInput ? [] : pages}
            currentPage={currentPage}
            handlePageCount={setCurrentPage}
          />
          <Footer />
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
