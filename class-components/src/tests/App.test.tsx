import { render, screen } from '@testing-library/react';
import { App } from '../archive.pages/_app';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

vi.mock('../components/Layout/layout', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="mocked-layout">{children}</div>
  ),
}));

vi.mock('../components/Errorboundary', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="mocked-error-boundary">{children}</div>
  ),
}));

vi.mock('next/font/google', () => ({
  Playfair_Display_SC: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

const mockRouteChangeStart = vi.fn();
const mockRouteChangeComplete = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    events: {
      on: vi.fn((event, callback) => {
        if (event === 'routeChangeStart') {
          mockRouteChangeStart();
          callback();
        }
        if (event === 'routeChangeComplete') {
          mockRouteChangeComplete();
          callback();
        }
      }),
      off: vi.fn(),
    },
  }),
}));

const TestComponent = () => <div>Test Component</div>;

describe('App Component', () => {
  it('renders correctly and shows loader on route change', () => {
    render(<App Component={TestComponent} pageProps={{}} />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();

    const { events } = useRouter();
    events.on('routeChangeStart', () => {});

    events.on('routeChangeComplete', () => <div>Test Component</div>);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('renders layout correctly', () => {
    render(<App Component={TestComponent} pageProps={{}} />);

    expect(screen.getByTestId('mocked-layout')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-error-boundary')).toBeInTheDocument();
  });
});
