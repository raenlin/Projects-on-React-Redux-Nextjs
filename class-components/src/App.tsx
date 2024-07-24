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
import { ThemeContext } from './contexts/theme';
import { themes } from './contexts/theme';

export function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [theme, setTheme] = useState(themes.light);
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

  const handleThemeChange = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <Header name="Star Wars Planets" theme={theme} />
        <Search onSearch={handleFetchData} setquery={setQuery} />
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  items={items}
                  pages={pages}
                  setquery={setQuery}
                  query={query.page}
                  theme={theme}
                />
              }
            >
              <Route path="/planets/:id" element={<CardDetails />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        )}
        <Footer />
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
