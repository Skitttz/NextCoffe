import './globals.css';
import { inter, besley, roboto } from './fonts';
import Header from './_components/Layout/Header';
import Footer from './_components/Layout/Footer';

export const metadata = {
  title: 'Next Coffe',
  description: 'Coffee blog and store for online coffee ordering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${inter.className} ${besley.variable} ${roboto.variable} bg-slate-200 scroll-smooth flex flex-col`}
      >
        <Header />
        <main className="pt-2 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
