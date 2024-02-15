import { Besley , Inter, Roboto } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const besley = Besley({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-besley',
})

export const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-besley',
})
