import './styles.css';
import { Metadata } from 'next';
import ProviderWrapper from '../components/ProviderWrapper/providerWrapper';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Star Wars Planets',
  description: 'Star Wars Planets API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
