'use client';
import Link from 'next/link';
import Image from 'next/image';
import LogoWithoutCup from '@/assets/LogoWithoutCup';
import { usePathname } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5'; // import useDebounce from '../../hooks/useDebounce';

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
          className={`lg:max-w-7xl max-w-5xl mx-auto flex justify-between items-center gap-x-6 font-roboto `}
        >
          <Link className="flex" href={'/'}>
            <LogoWithoutCup />{' '}
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
          <div className="flex gap-x-2 items-center text-sm">
            {/* <Link className="hover:text-slate-500" href={'/login'}>
              Login
            </Link> */}
            <Link
              href={'/register'}
              className="transition-colors font-semibold px-2 py-1"
            >
              <FaRegUser className="text-lg" />{' '}
            </Link>
            <Link href={'/'}>
              <IoCartOutline className="text-xl" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="pb-5 lg:pb-2"></div>
    </>
  );
}
