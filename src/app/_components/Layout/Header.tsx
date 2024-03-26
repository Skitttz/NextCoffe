'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/icon-logo.svg';
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

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const debouncedHandleScroll = useDebounce((...args: any) => {
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  // }, 100); // 200 é o tempo de debounce em milissegundos

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', debouncedHandleScroll);

  //     return () => window.removeEventListener('scroll', debouncedHandleScroll);
  //   }
  // }, [debouncedHandleScroll]); // Dependência adicionada

  // ${
  //   scrollPosition !== 0
  //     ? 'fixed pt-2 px-4 '
  //     : 'fixed bg-sky-50 shadow-sm'
  // }

  // ${
  //   scrollPosition !== 0
  //     ? 'duration-700 bg-gray-50 border border-amber-950 border-opacity-10 rounded-md bg-opacity-95 shadow-sm'
  //     : ''
  // }
  const activeLinkPath = usePathname();

  return (
    <>
      <header
        className={`transition-all w-full mx-auto block z-50 duration-700 bg-gray-50 border border-amber-950 border-opacity-10 rounded-md bg-opacity-95 shadow-sm py-1`}
      >
        <nav
          className={`lg:max-w-7xl max-w-5xl  px-4 mx-auto flex justify-between items-center gap-x-6 font-roboto `}
        >
          <Link className="flex items-center" href={'/'}>
            <Image
              className="py-2"
              src={Logo}
              width={180}
              height={50}
              alt={'logo header'}
            />{' '}
          </Link>
          <ul className="flex gap-x-6">
            {navMenuItems.map((item: navItems, index: number) => (
              <li key={index}>
                <Link
                  className={`transition-colors hover:text-slate-500 ${
                    activeLinkPath.startsWith(item.slug) && item.slug !== '/'
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
              className="transition-colors font-semibold px-2 py-1 rounded-md bg-coffe-primary-600 hover:bg-coffe-primary-700 text-gray-200"
            >
              Join US{' '}
            </Link>
          </div>
        </nav>
      </header>
      <div className="pb-24 lg:pb-20"></div>
    </>
  );
}
