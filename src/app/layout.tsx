import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { GlobalProviders } from './global-providers';
import { Footer } from '@/global/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hespace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body className={`antialiased flex flex-col min-h-screen`}>
        <GlobalProviders>
          {children}
          <ToastContainer />
        </GlobalProviders>
        <Footer />
      </body>
    </html>
  );
}
