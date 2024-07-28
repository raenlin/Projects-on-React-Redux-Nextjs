import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeContext } from '../contexts/theme';
import { Popup } from '../components/Popup/Popup';
import { store } from '../store/store';
import { vi } from 'vitest';
import { Planet } from '../utils/types';
import { unselectItem } from '../store/cardsSlice';

vi.mock('file-saver', () => ({
  saveAs: vi.fn(),
}));

const mockThemeContextLight = {
  theme: 'light',
  handleThemeChange: () => {},
};

describe('Popup Component', () => {
  const selectedCards: Planet[] = [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      created: '2014-12-09T13:50:49.641000Z',
    },
  ];

  beforeEach(() => {
    store.dispatch = vi.fn();
  });

  test('renders correctly with selected cards', () => {
    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextLight}>
          <Popup selectedCards={selectedCards} />
        </ThemeContext.Provider>
      </Provider>
    );

    selectedCards.forEach((card) => {
      const cardElement = screen.getByText(card.name);
      expect(cardElement).toBeInTheDocument();
    });
  });

  test('dispatches unselectItem action when Unselect all button is clicked', () => {
    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextLight}>
          <Popup selectedCards={selectedCards} />
        </ThemeContext.Provider>
      </Provider>
    );
    const unselectAllButton = screen.getByRole('button', { name: 'Unselect all' });
    expect(unselectAllButton).toBeInTheDocument();
    fireEvent.click(unselectAllButton);

    selectedCards.forEach((card) => {
      expect(store.dispatch).toHaveBeenCalledWith(unselectItem(card));
    });
  });

  test('downloads CSV when download button is clicked', async () => {
    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextLight}>
          <Popup selectedCards={selectedCards} />
        </ThemeContext.Provider>
      </Provider>
    );

    expect(screen.getByText('1 items are selected:')).toBeInTheDocument;
    expect(screen.getByRole('button', { name: 'Unselect all' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument();
  });

  test('renders nothing if no cards are selected', () => {
    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextLight}>
          <Popup selectedCards={[]} />
        </ThemeContext.Provider>
      </Provider>
    );

    expect(screen.queryByText(/items are selected/i)).not.toBeInTheDocument();
  });
});
