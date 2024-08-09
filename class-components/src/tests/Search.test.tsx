import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // если используете react-router
import Search from '../components/Search/search';
import { ThemeContext } from '../contexts/theme';
import useLocalStorage from '../utils/localStorageHook';

vi.mock('../utils/localStorageHook');
vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));
const handleThemeChange = vi.fn();

describe('Search Component', () => {
  const mockSetValue = vi.fn();
  const mockValue = '';

  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockImplementation(() => [mockValue, mockSetValue]);
  });

  beforeAll(() => {
    vi.mock('next/router', () => ({
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));
  });

  it('renders without crashing', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('updates input value correctly', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </ThemeContext.Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Mars' } });

    expect(mockSetValue).toHaveBeenCalledWith('Mars');
  });

  it('handles button click with valid input', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </ThemeContext.Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Mars' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(mockSetValue).toHaveBeenCalledWith('');
  });

  it('handles button click with empty input', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', handleThemeChange }}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </ThemeContext.Provider>
    );

    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(mockSetValue).toHaveBeenCalledWith('');
  });
});
