import './App.css';
import { useState, useEffect } from 'react';
import Header from './view/Header/Header';
import Search from './view/Search/Search';
import Main from './view/Main/Main';
import { fetchData } from './services/api';
import ErrorBoundary from './components/Errorboundary';
import Footer from './view/Footer/Footer';
import { Planet } from './utils/types';

export function App() {
  const [items, setItems] = useState<Planet[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [fetching, setFetching] = useState(false);

  const handleFetchData = async (searchInput: string) => {
    try {
      setFetching(true);
      const data = await fetchData(searchInput);
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

  useEffect(() => {
    const savedSearch = localStorage.getItem('searchPlanet');
    if (savedSearch) {
      handleFetchData(savedSearch);
    } else {
      handleFetchData('');
    }
  }, []);

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
          <Main items={items} />
          <Footer />
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
