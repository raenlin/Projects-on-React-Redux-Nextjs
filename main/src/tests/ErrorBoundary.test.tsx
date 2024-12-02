import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/Errorboundary';

describe('ErrorBoundary', () => {
  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('renders fallback UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <div>Something went wrong...</div>
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
  });
});
