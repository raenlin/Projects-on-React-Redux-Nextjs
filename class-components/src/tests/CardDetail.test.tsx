import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardDetails from '../components/Card/CardDetail';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme';
import { planetsApi } from '../store/planetsApi';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = (await importOriginal()) as {
    useParams: () => void;
    useNavigate: () => void;
  };
  return {
    ...actual,
    useParams: vi.fn(),
    useNavigate: vi.fn(),
  };
});

vi.mock('../store/planetsApi', () => ({
  planetsApi: {
    useGetPlanetsQuery: vi.fn(),
  },
}));

describe('CardDetails Component', () => {
  const mockThemeContext = {
    theme: 'light',
    handleThemeChange: () => {},
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders loader while loading', () => {
    (planetsApi.useGetPlanetsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const store = configureStore({
      reducer: { planetsApi: planetsApi.reducer },
    });

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContext}>
          <MemoryRouter initialEntries={['/planets/1']}>
            <CardDetails />
          </MemoryRouter>
        </ThemeContext.Provider>
      </Provider>
    );
  });

  test('renders error message on error', async () => {
    (planetsApi.useGetPlanetsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('Something went wrong'),
    });

    const store = configureStore({
      reducer: { planetsApi: planetsApi.reducer },
    });

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContext}>
          <MemoryRouter initialEntries={['/planets/1']}>
            <CardDetails />
          </MemoryRouter>
        </ThemeContext.Provider>
      </Provider>
    );

    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });

  test('renders planet details when data is returned', async () => {
    (planetsApi.useGetPlanetsQuery as jest.Mock).mockReturnValue({
      data: {
        results: [
          {
            name: 'Earth',
            diameter: '12742',
            rotation_period: '24',
            orbital_period: '365',
            climate: 'temperate',
            terrain: 'mountains',
            gravity: '1',
            population: '7800000000',
            surface_water: '71%',
            created: '2014-12-10T12:45:06.577Z',
          },
        ],
      },
      isLoading: false,
      error: null,
    });
    const store = configureStore({
      reducer: { planetsApi: planetsApi.reducer },
    });

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContext}>
          <MemoryRouter initialEntries={['/planets/1']}>
            <CardDetails />
          </MemoryRouter>
        </ThemeContext.Provider>
      </Provider>
    );

    expect(await screen.findByText(/Earth/i)).toBeInTheDocument();
    expect(screen.getByText(/Diameter: 12742/i)).toBeInTheDocument();
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });
});
