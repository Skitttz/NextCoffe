import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';

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

  return (
    <>
      <header className="w-full bg-gray-200 bg-opacity-80 border-b border-b-slate-600 border-opacity-10 px-4 pt-2 mx-auto fixed z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center gap-x-6 font-besley">
          <Link className="flex items-center" href={'/'}>
            <h1 className="text-2xl font-besley font-black text-amber-800">
              Next [
            </h1>
            <Image src={Logo} width={50} height={50} alt={'logo header'} /> ]
          </Link>
          <ul className="flex gap-x-6">
            {navMenuItems.map((item: navItems, index: number) => (
              <li key={index}>
                <Link className="hover:text-slate-500" href={item.slug}>
                  {item.nameItem}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-3 items-center">
            <Link className="hover:text-slate-500" href={'/login'}>
              Login
            </Link>
            <Link
              href={'/register'}
              className="font-bold px-2 py-1 rounded-md bg-amber-700 hover:bg-amber-800 text-slate-100"
            >
              Get started{' '}
            </Link>
          </div>
        </nav>
      </header>
      <div className="pb-24 lg:pb-[50px]"></div>
    </>
  );
}
