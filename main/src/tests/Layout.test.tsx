import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RootLayout from '../app/layout';
import Loading from '../app/loading';
import { ReactNode, Suspense } from 'react';

vi.mock('../components/ProviderWrapper/providerWrapper', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock('../components/Header/header', () => ({
  default: () => <header>Header</header>,
}));

vi.mock('../components/Footer/footer', () => ({
  default: () => <footer>Footer</footer>,
}));

vi.mock('./loading', () => ({
  default: () => <div>Loading...</div>,
}));

describe('RootLayout Component', () => {
  it('renders Header, Footer and children', () => {
    render(
      <RootLayout>
        <div>Test Children</div>
      </RootLayout>
    );

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Children/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });

  it('displays loading fallback when children are not ready', () => {
    render(
      <RootLayout>
        <Suspense fallback={<Loading />}>
          <Loading />
        </Suspense>
      </RootLayout>
    );

    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
