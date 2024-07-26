import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from '../view/Main/main';
import { Planet } from '../utils/types';

describe('Main component', () => {
  const mockItems: Planet[] = [];

  it('renders Card components for each item', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Main items={mockItems} pages={[1]} setquery={() => {}} query={1} />
      </MemoryRouter>
    );

    mockItems.forEach((item) => {
      const cardElement = screen.getByText(item.name);
      expect(cardElement).toBeInTheDocument();
    });
  });
});
