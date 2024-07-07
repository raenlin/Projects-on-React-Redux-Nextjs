import { Planet } from '../../utils/types';

export type MainProps = {
  items: Planet[];
  pages: number[];
  currentPage: number;
  handlePageCount: (page: number) => void;
};
