import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import App from '../App';

describe('App Component', () => {
  test('renders App component without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <App />
          </QueryParamProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Star Wars Planets/i)).toBeInTheDocument();
  });
});
