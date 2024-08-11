import { render, screen } from '@testing-library/react';
import NotFound from '../app/not-found';

describe('NotFound', () => {
  it('renders correctly', () => {
    render(<NotFound />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();

    expect(screen.getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/?search=&page=1');
  });
});
