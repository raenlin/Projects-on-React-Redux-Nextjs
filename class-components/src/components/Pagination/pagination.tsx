// import { Link } from 'react-router-dom';
import { useRouter } from 'next/router';
import styles from './pagination.module.css';
import { PaginationProps } from './pagination.type';

export function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const currentPage = Number(router.query.page);
  return (
    <div className={styles.pagination}>
      <ul className={styles['pagination-list']}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              currentPage === page
                ? styles['pagination-list__item-active']
                : styles['pagination-list__item']
            }
            onClick={() => {
              router.push(`/?search=&page=${page}`);
            }}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}
