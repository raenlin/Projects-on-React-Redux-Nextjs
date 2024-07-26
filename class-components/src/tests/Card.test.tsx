import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../store/cardsSlice';
import Card from '../components/Card/Card';
import { Planet } from '../utils/types';
import { BrowserRouter } from 'react-router-dom';
import { planetsApi } from '../store/planetsApi';
import { vi } from 'vitest';

const setUpStore = () => {
  return configureStore({
    reducer: {
      cards: cardsReducer,
      [planetsApi.reducerPath]: planetsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetsApi.middleware),
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
  const setIsPopupVisible = vi.fn();

  test('renders Card component', () => {
    const store = setUpStore();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card
            setIsPopupVisible={setIsPopupVisible}
            innerClassName={innerClassName}
            className={className}
            item={item}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('selects the card when checkbox is checked', () => {
    const store = setUpStore();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card
            setIsPopupVisible={setIsPopupVisible}
            innerClassName={innerClassName}
            className={className}
            item={item}
          />
        </BrowserRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(store.getState().cards.selectedCards).toHaveLength(1);
    expect(store.getState().cards.selectedCards[0]).toEqual(item);
  });
});
