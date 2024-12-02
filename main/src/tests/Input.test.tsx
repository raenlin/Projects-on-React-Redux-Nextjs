import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from '../components/Input/Input';

describe('Input component', () => {
  it('renders with the correct placeholder', () => {
    const handleChange = vi.fn();
    render(
      <Input
        onChange={handleChange}
        className="input-class"
        placeholder="Enter text"
        value=""
        type="text"
      />
    );

    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with the correct initial value', () => {
    const handleChange = vi.fn();
    render(
      <Input
        onChange={handleChange}
        placeholder="Enter text"
        value="Hello"
        type="text"
        className="input-class"
      />
    );

    const inputElement = screen.getByDisplayValue(/hello/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange handler when value changes', () => {
    const handleChange = vi.fn();
    render(
      <Input
        placeholder="Enter text"
        value=""
        type="text"
        onChange={handleChange}
        className="input-class"
      />
    );

    const inputElement = screen.getByPlaceholderText(/enter text/i);
    fireEvent.change(inputElement, { target: { value: 'New text' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class name', () => {
    const handleChange = vi.fn();
    render(
      <Input
        value=""
        type="text"
        className="input-class"
        placeholder="Enter text"
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toHaveClass('input-class');
  });
});
