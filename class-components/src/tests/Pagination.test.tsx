import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../components/Pagination/pagination';
import { useRouter } from 'next/router';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Pagination Component', () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: '1' },
      push: mockPush,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the correct number of pages', () => {
    const pages = [1, 2, 3, 4, 5];

    render(<Pagination pages={pages} />);

    const pageItems = screen.getAllByRole('listitem');
    expect(pageItems).toHaveLength(pages.length);
  });

  it('highlights the current page', () => {
    const pages = [1, 2, 3];

    render(<Pagination pages={pages} />);
    const activeItem = screen.getByText('1');
    expect(activeItem).toHaveClass('_pagination-list__item-active_1875ff');
  });

  it('calls router.push with the correct page number when a page is clicked', () => {
    const pages = [1, 2, 3];

    render(<Pagination pages={pages} />);

    fireEvent.click(screen.getByText('2'));

    expect(mockPush).toHaveBeenCalledWith('/?search=&page=2');
  });
});
