import styles from './layout.module.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/theme';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState('');
  const savedTheme: string | null =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

  useEffect(() => {
    savedTheme === 'light' ? setTheme(themes.dark) : setTheme(themes.light);
  }, [setTheme]);

  const handleThemeChange = () => {
    localStorage.setItem('theme', theme);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <div className={`${theme === 'light' ? styles['wrapper-dark'] : styles.wrapper}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
