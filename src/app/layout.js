import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Coffe',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" size={32} />
      <body className={`${inter.className} bg-slate-200`}>
        <Header />
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
