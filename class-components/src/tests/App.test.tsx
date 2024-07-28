import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { store } from '../store/store';

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <App />
          </QueryParamProvider>
        </MemoryRouter>
      </Provider>
    );
  };

  it('renders without crashing and shows header and footer', () => {
    renderComponent();

    expect(screen.getByText(/Star Wars Planets/i)).toBeInTheDocument();
    expect(screen.getByText(/raenlin/i)).toBeInTheDocument();
    expect(screen.getByText(/Error!/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
