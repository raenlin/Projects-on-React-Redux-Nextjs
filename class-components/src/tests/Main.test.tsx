import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Main from '../components/Main/main';

vi.mock('next/navigation', async (importOriginal) => {
  const actual: typeof import('next/navigation') = await importOriginal();
  return {
    ...actual,
    useSearchParams: () => ({
      get: (param: string) => {
        if (param === 'search') return 'testSearch';
        if (param === 'page') return '1';
        return null;
      },
    }),
    useRouter: () => ({
      push: vi.fn(),
    }),
  };
});

describe('Main component', () => {
  const items = [
    {
      name: 'Tatooine',
      diameter: '10465',
      rotation_period: '23',
      orbital_period: '304',
      climate: 'arid',
      terrain: 'desert',
      gravity: '1',
      population: '200000',
      surface_water: '1',
      created: '2014-12-09T13:50:49.641Z',
    },
  ];
  const pages = [3];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Main items={items} pages={pages} />
      </Provider>
    );
  });

  it('renders the list of cards', () => {
    items.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders the pagination', () => {
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it('triggers the correct link for each card', () => {
    const link1 = screen.getByText(/Tatooine/i).closest('a');
    expect(link1).toHaveAttribute('href', '/Tatooine?search=testSearch&page=1');
  });
});
