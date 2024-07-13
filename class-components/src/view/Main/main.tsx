import './main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../../components/Pagination/pagination';
import { Outlet } from 'react-router-dom';

function Main({ items, pages, currentPage, handlePageCount }: MainProps) {
  return (
    <section className="main">
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
      <div className="pagination">
        <ul className="pagination-list">
          {pages.map((page) => (
            <Pagination
              key={page}
              className={
                currentPage === page ? 'pagination-list__item active' : 'pagination-list__item'
              }
              onClick={() => handlePageCount(page)}
              page={page}
            />
          ))}
        </ul>
      </div>
      <Outlet />
    </section>
  );
}

export default Main;
