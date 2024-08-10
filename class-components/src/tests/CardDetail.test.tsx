import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeContext } from '../contexts/theme';
import { vi } from 'vitest';
import CardDetails from '../archive.pages/[id]';
import { useGetPlanetsQuery } from '../store/planetsApi';
import { useRouter } from 'next/router';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

vi.mock('../store/planetsApi', () => ({
  useGetPlanetsQuery: vi.fn(),
}));

const handleThemeChange = vi.fn();

describe('CardDetails component', () => {
  beforeEach(() => {
    (useGetPlanetsQuery as jest.Mock).mockImplementation(() => ({
      currentData: {
        results: [
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
        ],
      },
    }));
    (useRouter as jest.Mock).mockReturnValue({
      query: { search: '', page: '', id: '1' },
      push: vi.fn(),
    });
  });

  test('renders planet data correctly', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <CardDetails />
      </ThemeContext.Provider>
    );

    expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
    expect(screen.getByText(/Diameter: 10465/i)).toBeInTheDocument();
    expect(screen.getByText(/Rotation-period: 23/i)).toBeInTheDocument();
    expect(screen.getByText(/Orbital-period: 304/i)).toBeInTheDocument();
    expect(screen.getByText(/Climate: arid/i)).toBeInTheDocument();
    expect(screen.getByText(/Terrain: desert/i)).toBeInTheDocument();
    expect(screen.getByText(/Gravity: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Population: 200000/i)).toBeInTheDocument();
    expect(screen.getByText(/Surface-water: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Created: 2014-12-09T13:50:49.641Z/i)).toBeInTheDocument();
  });

  test('button click navigates back to search page', () => {
    const mockPush = vi.fn();
    (useRouter as jest.Mock).mockReturnValueOnce({
      query: { search: '', page: '', id: '1' },
      push: mockPush,
    });
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <CardDetails />
      </ThemeContext.Provider>
    );

    const button = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/?search=&page=');
  });
});
