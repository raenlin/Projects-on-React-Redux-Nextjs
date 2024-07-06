import { ChangeEvent } from 'react';

export type InputProps = {
  value: string;
  type: string;
  className: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
