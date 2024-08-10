import './style.css';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import ErrorBoundary from '../components/Errorboundary';
import { Playfair_Display_SC } from 'next/font/google';
import Layout from '../components/Layout/layout';
import { wrapper } from '../store/store';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const start = () => {
    setIsLoading(true);
  };

  const end = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router]);

  return (
    <ErrorBoundary>
      <>
        <style jsx global>{`
          html,
          button,
          input {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        )}
      </>
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
