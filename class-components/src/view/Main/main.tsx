import './main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../../components/Pagination/pagination';
import { Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

function Main({ items, pages, setquery, query }: MainProps) {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <section className={`${theme === 'light' ? 'main' : 'main main-dark'}`}>
      <div className="main-list__wrapper">
        <ul className="main-list">
          {items.map((item) => (
            <Card
              key={item.name}
              className={`${theme === 'light' ? 'main-list__item ' : 'main-list__item main-list__item-dark'}`}
              innerClassName="main-list__item-inner"
              item={item}
            />
          ))}
        </ul>
        <Outlet />
      </div>
      {location.pathname === '/' && <Pagination pages={pages} setquery={setquery} query={query} />}
    </section>
  );
}

export default Main;
