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
