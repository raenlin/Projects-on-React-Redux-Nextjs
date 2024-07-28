import { Link } from 'react-router-dom';
import { PaginationProps } from './pagination.type';

export function Pagination({ pages, setquery, query }: PaginationProps) {
  return (
    <div className="pagination">
      <ul className="pagination-list">
        {pages.map((page) => (
          <li
            key={page}
            className={query === page ? 'pagination-list__item active' : 'pagination-list__item'}
            onClick={() => {
              setquery({
                page: page,
              });
            }}
          >
            <Link key={page} to={`/?search=&page=${page}`}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
