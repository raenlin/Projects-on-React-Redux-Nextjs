import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { MemoryRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

vi.mock('./store/planetsApi', () => ({
  planetsApi: {
    useGetPlanetsQuery: jest.fn(),
  },
}));

describe('App Component', () => {
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

    expect(screen.getByText(/Planets/i)).toBeInTheDocument();

    expect(screen.getByText(/raenlin/i)).toBeInTheDocument();
  });

  it('displays loading state', async () => {
    vi.mock('./store/planetsApi', () => ({
      planetsApi: {
        useGetPlanetsQuery: () => ({
          data: null,
          isLoading: true,
          error: null,
        }),
      },
    }));

    renderComponent();
  });

  it('displays error state', () => {
    vi.mock('./store/planetsApi', () => ({
      planetsApi: {
        useGetPlanetsQuery: () => ({
          data: null,
          isLoading: false,
          error: new Error('Error fetching planets'),
        }),
      },
    }));

    renderComponent();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
