import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from '../view/Main/main';
import { Planet } from '../utils/types';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { vi } from 'vitest';

describe('Main component', () => {
  const mockItems: Planet[] = [];

  it('renders Card components for each item', () => {
    const setup = (items = mockItems) => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Main items={items} pages={[3]} setquery={vi.fn()} query={1} />
          </MemoryRouter>
        </Provider>
      );
    };
    setup();

    mockItems.forEach((item) => {
      const cardElement = screen.getByText(item.name);
      expect(cardElement).toBeInTheDocument();
    });
  });
});
