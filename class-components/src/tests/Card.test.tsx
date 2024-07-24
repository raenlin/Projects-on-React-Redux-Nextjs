import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer, { CardsState } from '../store/cardsSlice';
import Card from '../components/Card/Card';
import { Planet } from '../utils/types';
import { BrowserRouter } from 'react-router-dom';

const setUpStore = (initialState: CardsState) => {
  return configureStore({
    reducer: { cards: cardsReducer },
    preloadedState: initialState,
  });
};

describe('Card Component', () => {
  const item: Planet = {
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
  };

  const innerClassName = 'inner';
  const className = 'card-class';

  test('renders Card component', () => {
    const store = setUpStore({ cards: { selectedCards: [] } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card innerClassName={innerClassName} className={className} item={item} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('selects the card when checkbox is checked', () => {
    const store = setUpStore({ cards: { selectedCards: [] } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card innerClassName={innerClassName} className={className} item={item} />
        </BrowserRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(store.getState().cards.selectedCards).toHaveLength(1);
    expect(store.getState().cards.selectedCards[0]).toEqual(item);
  });

  test('unselects the card when checkbox is unchecked', () => {
    const initialState = { cards: { selectedCards: [item] } };
    const store = setUpStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card innerClassName={innerClassName} className={className} item={item} />
        </BrowserRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(store.getState().cards.selectedCards).toHaveLength(0);
  });
});
