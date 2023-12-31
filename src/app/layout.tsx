import { Inter } from 'next/font/google';
import './globals.css';
import { besley, roboto } from './fonts';
import Header from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Coffe',
  description: 'Coffee blog and store for online coffee ordering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${inter.className} ${besley.variable} ${roboto.variable} bg-slate-200 scroll-smooth`}
      >
        <Header />
        <main className="pt-2 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
