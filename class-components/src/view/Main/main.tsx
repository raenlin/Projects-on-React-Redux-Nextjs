import './main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../../components/Pagination/pagination';
import { Outlet } from 'react-router-dom';

function Main({ items, pages, currentPage, handlePageCount }: MainProps) {
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
      <Pagination pages={pages} currentPage={currentPage} handlePageCount={handlePageCount} />
    </section>
  );
}

export default Main;
