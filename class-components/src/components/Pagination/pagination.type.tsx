export type PaginationProps = {
  pages: number[];
  currentPage: number;
  handlePageCount: (page: number) => void;
};
