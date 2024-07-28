import './search.css';
import { ChangeEvent, useContext, useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { SearchProp } from './Search.type';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../../utils/localStorageHook';
import { ThemeContext } from '../../contexts/theme';

function Search({ onSearch, setquery }: SearchProp) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useState('');
  const [query, setQuery, setLocalStorageValue] = useSearchQuery('searchPlanet', '');

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleClick = () => {
    const searchText = input.trim();
    setLocalStorageValue(searchText);
    if (input) {
      onSearch(input.trim());
      navigate(`/planets/${searchParams}`);
    } else {
      onSearch('');
      const defaultQuery = { search: '', page: 1 };
      setquery(defaultQuery);
      navigate(`/?search=${defaultQuery.search}&page=${defaultQuery.page}`);
    }
    setInput('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
    setInput(event.target.value);
    setQuery(event.target.value);
  };

  const handleError = () => setError(true);

  if (error) {
    throw new Error('I crashed!');
  } else {
    return (
      <section className="search">
        <div className="search-inner">
          <Input
            value={query}
            type="text"
            className={`${theme === 'light' ? 'search-inner__input search-inner__input-dark' : 'search-inner__input'}`}
            placeholder="Type planet to search..."
            onChange={handleChange}
          />
          <Button
            className={`${theme === 'light' ? 'search-inner__button search-inner__button-dark' : 'search-inner__button'}`}
            onClick={handleClick}
            name="Search"
          />
          <button
            className={`${theme === 'light' ? 'search-inner__button-error search-inner__button-error__dark' : 'search-inner__button-error'}`}
            onClick={handleError}
          >
            Error!
          </button>
        </div>
      </section>
    );
  }
}

export default Search;
