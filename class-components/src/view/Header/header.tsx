import './Header.css';
import { useContext } from 'react';
import { HeaderProps } from './Header.type';
import { ThemeContext } from '../../contexts/theme';

function Header({ name }: HeaderProps) {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{name}</h1>
        <button
          className={`${theme === 'light' ? 'theme-button' : 'theme-button theme-button__dark'}`}
          onClick={handleThemeChange}
        >
          {theme}
        </button>
      </div>
    </header>
  );
}

export default Header;
