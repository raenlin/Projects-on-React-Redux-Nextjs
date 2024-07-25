import './App.css';
import { useEffect, useState } from 'react';
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
import { ThemeContext } from './contexts/theme';
import { themes } from './contexts/theme';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { addItems } from './store/cardsSlice';

export function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [theme, setTheme] = useState('');
  const [query, setQuery] = useQueryParams({
    search: StringParam,
    page: NumberParam,
  });
  const dispatch = useDispatch<AppDispatch>();
  const savedTheme: string | null = localStorage.getItem('theme');
  useEffect(() => {
    savedTheme === 'light' ? setTheme(themes.dark) : setTheme(themes.light);
  }, [setTheme]);

  const { data, error, isLoading } = planetsApi.useGetPlanetsQuery({
    search: searchInput ? searchInput : '',
    page: query.page ? query.page : 1,
  });
  const items: Planet[] = data ? data.results : [];

  useEffect(() => {
    if (items.length > 0) {
      dispatch(addItems(items));
    }
  }, [items]);

  const planetsCount: number = data ? data.count : 0;
  const pagesCount = Math.ceil(planetsCount / pagePlanetsCount);
  const pages: number[] = searchInput ? [] : Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handleFetchData = (searchInput: string) => {
    setSearchInput(searchInput.trim());
  };

  const handleThemeChange = () => {
    localStorage.setItem('theme', theme);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <div className={`${theme === 'light' ? 'wrapper wrapper-dark' : 'wrapper'}`}>
          <Header name="Star Wars Planets" />
          <Search onSearch={handleFetchData} setquery={setQuery} />
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <Main items={items} pages={pages} setquery={setQuery} query={query.page} />
                }
              >
                <Route path="/planets/:id" element={<CardDetails />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          )}
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
