import './App.css';
import { useState, useEffect } from 'react';
import Header from './view/Header/header';
import Search from './view/Search/search';
import Main from './view/Main/main';
import { fetchData, fetchPages } from './services/api';
import ErrorBoundary from './components/Errorboundary';
import Footer from './view/Footer/footer';
import { Planet } from './utils/types';
import { pagePlanetsCount } from './utils/constants';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './view/404/404';
import CardDetails from './components/Card/CardDetail';

export function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [items, setItems] = useState<Planet[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [planetsCount, setPlanetsCount] = useState<number>(1);

  const pagesCount = Math.ceil(planetsCount / pagePlanetsCount);
  const pages: number[] = searchInput ? [] : Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handleFetchData = async (searchInput: string) => {
    try {
      setFetching(true);
      const data = await fetchData(searchInput);
      setSearchInput(searchInput.trim());
      setItems(data);
      setError(null);
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
    handleFetchPages(currentPage);
  }, [currentPage]);

  if (error) {
    return <p>Error {error.message}</p>;
  }

  return (
    <ErrorBoundary>
      <Header name="Star Wars Planets" />
      <Search onSearch={handleFetchData} currentPage={setCurrentPage} />
      {fetching ? (
        <div className="loader"></div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Main
                items={items}
                pages={pages}
                currentPage={currentPage}
                handlePageCount={setCurrentPage}
              />
            }
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
