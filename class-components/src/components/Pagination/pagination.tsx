import { Link } from 'react-router-dom';
import { PaginationProps } from './pagination.type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { selectItem } from '../../store/selectedPagesSlice';

export function Pagination({ pages, setquery, query, items }: PaginationProps) {
  const dispatch = useDispatch<AppDispatch>();

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
              dispatch(selectItem(items));
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
