export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
};

export type SearchProps = {
  searchInput: string;
  items: Planet[];
  error: Error | null;
  fetching: boolean;
};

export type ChildProps = {
  search?: string | null;
  page?: string | null;
};

export type searchParamsType = {
  search: string;
  page: string;
};

export type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};
