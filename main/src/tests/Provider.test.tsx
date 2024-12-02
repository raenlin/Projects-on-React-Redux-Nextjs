import { render, screen } from '@testing-library/react';
import ProviderWrapper from '../components/ProviderWrapper/providerWrapper';
import { store } from '../store/store';
import { Provider } from 'react-redux';

vi.mock('next/font/google', () => ({
  Playfair_Display_SC: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => {
        return key === 'theme' ? 'light' : null;
      },
      setItem: vi.fn(),
    },
    writable: true,
  });
});

describe('ProviderWrapper', () => {
  it('renders children and applies the correct theme', () => {
    render(
      <Provider store={store}>
        <ProviderWrapper>
          <div>Test Child</div>
        </ProviderWrapper>
      </Provider>
    );

    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();

    expect(screen.getByText(/Test Child/i).parentElement).toHaveClass('_wrapper_783b25'); // Убедитесь, что этот класс соответствует light теме
  });
});
