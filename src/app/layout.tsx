import './globals.css';
import { inter, besley, roboto } from './fonts';
import Header from './_components/Layout/Header';
import Footer from './_components/Layout/Footer';

export const metadata = {
  title: { template: '%s | Next Coffe', default: 'Next Coffe' },
  description: 'Coffee blog and store coffee ordering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${besley.variable} bg-sky-50 flex flex-col`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
