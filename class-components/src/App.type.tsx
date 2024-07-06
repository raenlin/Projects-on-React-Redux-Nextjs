import { Planet } from './utils/types';

export type AppProps = Record<string, never>;

export type SearchProps = {
  searchInput: string;
  items: Planet[];
  error: Error | null;
  isFetching: boolean;
};
