export type PaginationProps = {
  pages: number[];
  setquery: (params: { searchInput?: string; page?: number }) => void;
  query: number | null | undefined;
};
