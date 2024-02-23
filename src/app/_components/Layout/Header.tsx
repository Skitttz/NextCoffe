'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { usePathname } from 'next/navigation';

interface navItems {
  nameItem: string;
  slug: string;
}

export default function Header() {
  const navMenuItems = [
    { nameItem: 'Home', slug: '/' },
    { nameItem: 'Blog', slug: '/blog' },
    { nameItem: 'Shop', slug: '/coffe' },
    { nameItem: 'About', slug: '/about' },
    { nameItem: 'Contact', slug: '/contact' },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  const activeLinkPath = usePathname();
  return (
    <>
      <header
        className={`transition-all w-full mx-auto ${
          scrollPosition !== 0
            ? 'fixed pt-2 px-4 '
            : 'fixed bg-slate-100 shadow-sm'
        } z-50`}
      >
        <nav
          className={`max-w-5xl ${
            scrollPosition !== 0
              ? 'border border-amber-950 border-opacity-10 rounded-md bg-slate-100 bg-opacity-90 shadow-sm'
              : ''
          } px-4 mx-auto flex justify-between items-center gap-x-6 font-roboto `}
        >
          <Link className="flex items-center" href={'/'}>
            <h1 className="text-2xl font-besley font-black text-amber-800">
              Next [
            </h1>
            <Image src={Logo} width={50} height={50} alt={'logo header'} /> ]
          </Link>
          <ul className="flex gap-x-6">
            {navMenuItems.map((item: navItems, index: number) => (
              <li key={index}>
                <Link
                  className={`transition-colors hover:text-slate-500 ${
                    item.slug === activeLinkPath && item.slug !== '/'
                      ? 'font-bold text-amber-700'
                      : ''
                  }`}
                  href={item.slug}
                >
                  {item.nameItem}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-5 items-center text-sm">
            <Link className="hover:text-slate-500" href={'/login'}>
              Login
            </Link>
            <Link
              href={'/register'}
              className="transition-colors font-semibold px-2 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-gray-200"
            >
              Join US{' '}
            </Link>
          </div>
        </nav>
      </header>
      <div className="pb-24 lg:pb-[50px]"></div>
    </>
  );
}
