import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Search from '../view/Search/search';
import { MemoryRouter } from 'react-router-dom';

const mockOnSearch = vi.fn();
const mockCurrentPage = vi.fn();
const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
  const actual: typeof import('react-router-dom') = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('./hooks', () => ({
  useSearchQuery: (key: string, initialValue: string) => {
    const [query, setQuery] = React.useState(localStorage.getItem(key) || initialValue);
    const setLocalStorageValue = (value: string) => {
      localStorage.setItem(key, value);
      setQuery(value);
    };
    return [query, setQuery, setLocalStorageValue];
  },
}));

describe('<Search />', () => {
  beforeEach(() => {
    localStorage.clear();
    mockOnSearch.mockClear();
    mockCurrentPage.mockClear();
    mockNavigate.mockClear();
  });

  it('saves the entered value to the local storage when clicking the Search button', async () => {
    render(
      <MemoryRouter>
        <Search onSearch={mockOnSearch} currentPage={mockCurrentPage} />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Type planet to search...');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'Tatooine' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(localStorage.getItem('searchPlanet')).toBe('Tatooine');
    });
  });

  it('retrieves the value from the local storage upon mounting', async () => {
    localStorage.setItem('searchPlanet', 'Tatooine');

    render(
      <MemoryRouter>
        <Search onSearch={mockOnSearch} currentPage={mockCurrentPage} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Type planet to search...')).toHaveValue('Tatooine');
    });
  });
});
