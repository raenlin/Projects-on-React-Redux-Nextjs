import './Main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';

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
            <li
              key={page}
              className={
                currentPage === page ? 'pagination-list__item active' : 'pagination-list__item'
              }
              onClick={() => handlePageCount(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Main;
