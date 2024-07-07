export const fetchData = async (searchInput: string) => {
  const response = await fetch(`https://swapi.dev/api/planets?search=${searchInput}`);

  if (!response.ok) {
    throw new Error('Error fetching planet data');
  }

  const data = await response.json();
  return data.results;
};

export const fetchPages = async (page: number) => {
  const response = await fetch(`https://swapi.dev/api/planets/?search=&page=${page}`);
  if (!response.ok) {
    throw new Error('Error fetching planet data');
  }

  const data = await response.json();
  return data;
};
