import { Link } from 'react-router-dom';
import { PaginationProps } from './pagination.type';

export function Pagination({ className, onClick, page }: PaginationProps) {
  return (
    <li className={className} onClick={onClick}>
      <Link key={page} to={`/search/${page}`}>
        {page}
      </Link>
    </li>
  );
}
