import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search/search';
import { ThemeContext } from '../contexts/theme';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

const handleThemeChange = vi.fn();

describe('Search Component', () => {
  beforeEach(() => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <Search />
      </ThemeContext.Provider>
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders input and button', () => {
    expect(screen.getByPlaceholderText(/type planet to search.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    const input = screen.getByPlaceholderText(/type planet to search.../i);
    fireEvent.change(input, { target: { value: 'Mars' } });
    expect(input.value).toBe('Mars');
  });

  test('throws error when clicking error button', () => {
    const errorButton = screen.getByRole('button', { name: /error!/i });
    expect(() => fireEvent.click(errorButton)).toThrow('I crashed!');
  });
});
