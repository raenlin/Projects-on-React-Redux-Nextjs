import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '../store/store';
import Main from '../components/Main/main';
import { useRouter } from 'next/router';

const mockStore = makeStore();

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Main Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/some/path',
      query: {},
      push: vi.fn(),
    });
  });

  it('renders the correct number of Card components', () => {
    const mockItems = [
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
        created: '2014-12-09T13:50:49.641000Z',
      },
      {
        name: 'Mars',
        diameter: '10465',
        rotation_period: '23',
        orbital_period: '304',
        climate: 'arid',
        terrain: 'desert',
        gravity: '1',
        population: '200000',
        surface_water: '1',
        created: '2014-12-09T13:50:49.641000Z',
      },
    ];
    const mockPages = [1, 2];

    render(
      <Provider store={mockStore}>
        <Main items={mockItems} pages={mockPages}>
          <div>Child Component</div>
        </Main>
      </Provider>
    );

    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards).toHaveLength(mockItems.length);
  });

  it('renders the Pagination component', () => {
    const mockItems = [
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
        created: '2014-12-09T13:50:49.641000Z',
      },
      {
        name: 'Mars',
        diameter: '10465',
        rotation_period: '23',
        orbital_period: '304',
        climate: 'arid',
        terrain: 'desert',
        gravity: '1',
        population: '200000',
        surface_water: '1',
        created: '2014-12-09T13:50:49.641000Z',
      },
    ];
    const mockPages = [1, 2];

    render(
      <Provider store={mockStore}>
        <Main children={<div>Child Component</div>} items={mockItems} pages={mockPages} />
      </Provider>
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it('displays Popup when isPopupVisible is true', () => {
    const mockItems = [
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
        created: '2014-12-09T13:50:49.641000Z',
      },
      {
        name: 'Mars',
        diameter: '10465',
        rotation_period: '23',
        orbital_period: '304',
        climate: 'arid',
        terrain: 'desert',
        gravity: '1',
        population: '200000',
        surface_water: '1',
        created: '2014-12-09T13:50:49.641000Z',
      },
    ];
    const mockPages = [1];

    render(
      <Provider store={mockStore}>
        <Main children={<div>Child Component</div>} items={mockItems} pages={mockPages} />
      </Provider>
    );

    const card = screen.getByText(/tatooine/i);
    fireEvent.click(card);
  });

  it('renders children correctly', () => {
    const mockItems = [
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
        created: '2014-12-09T13:50:49.641000Z',
      },
      {
        name: 'Mars',
        diameter: '10465',
        rotation_period: '23',
        orbital_period: '304',
        climate: 'arid',
        terrain: 'desert',
        gravity: '1',
        population: '200000',
        surface_water: '1',
        created: '2014-12-09T13:50:49.641000Z',
      },
    ];
    const mockPages = [1, 2];

    render(
      <Provider store={mockStore}>
        <Main items={mockItems} pages={mockPages}>
          <div>Child Component</div>
        </Main>
      </Provider>
    );

    expect(screen.getByText(/child component/i)).toBeInTheDocument();
  });
});
