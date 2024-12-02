import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Card from '../components/Card/Card'; // Импортируйте ваш компонент Card
import { Planet } from '../utils/types'; // Импортируйте типы, которые вы используете
import { useRouter } from 'next/router';
import { act } from 'react';

const mockPlanet: Planet = {
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
};

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => {
      switch (key) {
        case 'search':
          return 'Mars';
        case 'page':
          return '1';
        default:
          return null;
      }
    },
  }),
}));

describe('Card Component', () => {
  const setIsPopupVisibleMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/mock-path',
    });
  });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Card
          innerClassName="inner-class"
          className="card-class"
          item={mockPlanet}
          setIsPopupVisible={setIsPopupVisibleMock}
        />
      </Provider>
    );

    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('checkbox state changes on click', async () => {
    render(
      <Provider store={store}>
        <Card
          innerClassName="inner-class"
          className="card-class"
          item={mockPlanet}
          setIsPopupVisible={setIsPopupVisibleMock}
        />
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await act(async () => {
      fireEvent.click(checkbox);
    });

    await act(async () => {
      return new Promise((resolve) => setTimeout(resolve, 600));
    });

    expect(setIsPopupVisibleMock).toHaveBeenCalledWith(true);
  });
});
