import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../components/Layout/layout';
import { themes } from '../contexts/theme';

vi.mock('../Header/header', () => () => <div>Header</div>);
vi.mock('../Footer/footer', () => () => <div>Footer</div>);

const setItemMock = vi.fn();
const getItemMock = vi.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    setItem: setItemMock,
    getItem: getItemMock,
  },
  writable: true,
});

describe('Layout Component', () => {
  beforeEach(() => {
    setItemMock.mockClear();
    getItemMock.mockClear();
  });

  it('renders with default theme', () => {
    getItemMock.mockReturnValue(null);

    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders with light theme from localStorage', () => {
    getItemMock.mockReturnValue('light');

    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('changes theme on handleThemeChange', () => {
    getItemMock.mockReturnValue('dark');

    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();

    const themeButton = screen.getByText(/light/i);
    fireEvent.click(themeButton);

    expect(setItemMock).toHaveBeenCalledWith('theme', themes.light);
    expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});
