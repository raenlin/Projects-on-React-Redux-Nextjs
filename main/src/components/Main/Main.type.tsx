import { ReactNode } from 'react';
import { Planet } from '../../utils/types';

export type MainProps = {
  items: Planet[];
  pages: number[];
  children: ReactNode;
};
