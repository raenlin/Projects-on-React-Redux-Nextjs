import { useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css';
import { PaginationProps } from './pagination.type';

export function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const params = useSearchParams();
  const currentpage = Number(params.get('page')) || 1;
  return (
    <div className={styles.pagination}>
      <ul className={styles['pagination-list']}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              currentpage === page
                ? styles['pagination-list__item-active']
                : styles['pagination-list__item']
            }
            onClick={() => router.push(`?search=&page=${page}`)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}
