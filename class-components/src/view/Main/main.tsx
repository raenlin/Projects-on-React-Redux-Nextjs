import './main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../../components/Pagination/pagination';
import { Outlet, useLocation } from 'react-router-dom';

function Main({ items, pages, setquery, query }: MainProps) {
  const location = useLocation();
  return (
    <section className="main">
      <div className="main-list__wrapper">
        <ul className="main-list">
          {items.map((item) => (
            <Card
              key={item.name}
              className="main-list__item"
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
