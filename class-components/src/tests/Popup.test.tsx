import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeContext } from '../contexts/theme';
import { Popup } from '../components/Popup/Popup';
import { store } from '../store/store';
import { vi } from 'vitest';
import { Planet } from '../utils/types';
import { unselectItem } from '../store/cardsSlice';

const mockThemeContextLight = {
  theme: 'light',
  handleThemeChange: () => {},
};

const mockThemeContextDark = {
  theme: 'dark',
  handleThemeChange: () => {},
};

describe('Popup Component', () => {
  it('renders correctly with selected cards', () => {
    const selectedCards: Planet[] = [];

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

  it('dispatches unselectItem action when Unselect all button is clicked', async () => {
    const selectedCards: Planet[] = [];
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextLight}>
          <Popup selectedCards={selectedCards} />
        </ThemeContext.Provider>
      </Provider>
    );

    selectedCards.forEach((card) => {
      expect(store.dispatch).toHaveBeenCalledWith(unselectItem(card));
    });
  });

  it('changes button style in dark theme', () => {
    const selectedCards: Planet[] = [];

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={mockThemeContextDark}>
          <Popup selectedCards={selectedCards} />
        </ThemeContext.Provider>
      </Provider>
    );
  });

  it('renders nothing if no cards are selected', () => {
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
