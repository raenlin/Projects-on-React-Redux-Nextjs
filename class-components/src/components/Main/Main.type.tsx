import { ReactNode } from 'react';
import { Planet } from '../../utils/types';

export type MainProps = {
  items: Planet[];
  pages: number[];
  setquery: (params: { searchInput?: string; page?: number }) => void;
  query: number | null | undefined;
  children: ReactNode;
};
