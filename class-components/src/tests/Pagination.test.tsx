import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '../components/Pagination/pagination';
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('Pagination Component', () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });
    useSearchParams.mockReturnValue({
      get: vi.fn(),
    });
  });

  afterEach(() => {
    mockPush.mockClear();
  });

  test('renders pagination with correct pages', () => {
    useSearchParams().get.mockReturnValue('1');
    const pages = [1, 2, 3];

    render(<Pagination pages={pages} />);

    pages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
    expect(screen.getByText('1')).toHaveClass('_pagination-list__item-active_1875ff');
  });

  test('clicking on a page navigates to the correct route', () => {
    useSearchParams().get.mockReturnValue('1');
    const pages = [1, 2, 3];

    render(<Pagination pages={pages} />);

    fireEvent.click(screen.getByText('2'));

    expect(mockPush).toHaveBeenCalledWith('?search=&page=2');
  });

  test('correctly applies the active class for the current page', () => {
    useSearchParams().get.mockReturnValue('3');
    const pages = [1, 2, 3];

    render(<Pagination pages={pages} />);

    expect(screen.getByText('3')).toHaveClass('_pagination-list__item-active_1875ff');
    expect(screen.getByText('1')).toHaveClass(' _pagination-list__item_1875ff');
    expect(screen.getByText('2')).toHaveClass('_pagination-list__item_1875ff');
  });
});
