import { render, screen } from '@testing-library/react';
import NotFound from '../app/not-found';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound component', () => {
  test('renders NotFound component with correct content', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Oops!/i })).toBeInTheDocument();

    expect(screen.getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /Home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/?search=&page=1');
  });
});
