export type InputProp = {
  input: string;
  isError?: boolean;
};

export type SearchProp = {
  onSearch: (input: string) => void;
};
