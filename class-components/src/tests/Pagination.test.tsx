import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Pagination } from '../components/Pagination/pagination';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const mockDispatch = vi.fn();

vi.mock('react-redux', async (importOriginal) => {
  const actual: Record<string, string> = await importOriginal();
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

describe('Pagination', () => {
  const pages = [1, 2, 3, 4, 5];
  const setquery = vi.fn();
  const query = 1;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination pages={pages} setquery={setquery} query={query} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders all pages correctly', () => {
    pages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it('calls setquery and dispatch on page click', () => {
    const pageNumber = pages[0];

    fireEvent.click(screen.getByText(pageNumber));

    expect(setquery).toHaveBeenCalledWith({ page: pageNumber });
  });
});
