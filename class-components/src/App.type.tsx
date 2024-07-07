import { Planet } from './utils/types';

export type SearchProps = {
  searchInput: string;
  items: Planet[];
  error: Error | null;
  fetching: boolean;
};
