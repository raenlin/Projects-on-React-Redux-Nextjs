export const fetchAllData = async () => {
  const response = await fetch('https://swapi.dev/api/planets');

  if (!response.ok) {
    throw new Error('Error fetching planet data');
  }

  const result = await response.json();
  return result.results;
};

export const fetchData = async (searchInput: string) => {
  const response = await fetch(`https://swapi.dev/api/planets?search=${searchInput}`);

  if (!response.ok) {
    throw new Error('Error fetching planet data');
  }

  const result = await response.json();
  return result.results;
};
