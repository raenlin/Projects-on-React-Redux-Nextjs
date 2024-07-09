import './main.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';

function Main({ items, pages, currentPage, handlePageCount }: MainProps) {
  return (
    <section className="main">
      <ul className="main-list">
        {items.map((item) => (
          <Link key={item.name} to={`/search/${currentPage}/${item.name}`}>
            <Card
              key={item.name}
              className="main-list__item"
              innerClassName="main-list__item-inner"
              item={item}
            />
          </Link>
        ))}
      </ul>
      <div className="pagination">
        <ul className="pagination-list">
          {pages.map((page) => (
            <Link key={page} to={`/search/${page}`}>
              <li
                key={page}
                className={
                  currentPage === page ? 'pagination-list__item active' : 'pagination-list__item'
                }
                onClick={() => handlePageCount(page)}
              >
                {page}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Main;
