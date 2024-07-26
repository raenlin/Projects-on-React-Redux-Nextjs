import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../components/Button/Button';

describe('Button component', () => {
  it('renders with the correct name', () => {
    const handleClick = vi.fn();
    render(<Button className="btn-primary" name="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button name="Click Me" onClick={handleClick} className="btn-primary" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class name', () => {
    const handleClick = vi.fn();
    render(<Button name="Click Me" className="btn-primary" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('btn-primary');
  });
});
