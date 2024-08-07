import './style.css';
import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import ErrorBoundary from '../components/Errorboundary';
import { QueryParamProvider } from 'use-query-params';
import NextAdapterApp from 'next-query-params/app';
import { Playfair_Display_SC } from 'next/font/google';
import Layout from '../components/Layout/layout';
import { wrapper } from '../store/store';

const font = Playfair_Display_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <ErrorBoundary>
      <QueryParamProvider adapter={NextAdapterApp}>
        <>
          <style jsx global>{`
            html,
            button,
            input {
              font-family: ${font.style.fontFamily};
            }
          `}</style>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </>
      </QueryParamProvider>
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
