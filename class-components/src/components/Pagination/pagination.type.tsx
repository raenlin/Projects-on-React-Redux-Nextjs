import { Planet } from '../../utils/types';

export type PaginationProps = {
  pages: number[];
  setquery: (params: { searchInput?: string; page?: number }) => void;
  query: number | null | undefined;
  items: Planet[];
};
