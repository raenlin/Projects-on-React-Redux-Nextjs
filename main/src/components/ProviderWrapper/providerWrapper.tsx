'use client';
import styles from './wrapper.module.css';
import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/theme';
import { Playfair_Display_SC } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const font = Playfair_Display_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
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
    <>
      <style jsx global>{`
        html,
        button,
        input {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <Provider store={store}>
          <div className={`${theme === 'light' ? styles['wrapper-dark'] : styles.wrapper}`}>
            {children}
          </div>
        </Provider>
      </ThemeContext.Provider>
    </>
  );
}
