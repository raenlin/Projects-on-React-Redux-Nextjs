import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeContext } from '../contexts/theme';
import Header from '../components/Header/header';

describe('Header Component', () => {
  const mockHandleThemeChange = vi.fn();

  const renderHeader = (theme = 'light') => {
    render(
      <ThemeContext.Provider value={{ theme, handleThemeChange: mockHandleThemeChange }}>
        <Header />
      </ThemeContext.Provider>
    );
  };

  it('displays the correct initial theme', () => {
    renderHeader();
    const buttonElement = screen.getByRole('button', { name: /light/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls handleThemeChange when the button is clicked', () => {
    renderHeader();
    const buttonElement = screen.getByRole('button', { name: /light/i });
    fireEvent.click(buttonElement);
    expect(mockHandleThemeChange).toHaveBeenCalled();
  });

  it('renders with dark theme styles', () => {
    renderHeader('dark');
    const buttonElement = screen.getByRole('button', { name: /dark/i });
    expect(buttonElement).toHaveClass('_theme-button_d33141');
    expect(buttonElement).not.toHaveClass('theme-button__dark');
  });
});
