import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

export default function Header() {
  const navMenuItems = [
    { nameItem: 'Home', slug: '/' },
    { nameItem: 'About', slug: '/about' },
    { nameItem: 'Coffe', slug: '/coffe' },
    { nameItem: 'Contact', slug: '/contact' },
  ];

  return (
    <>
      <header className="w-full bg-gray-200 bg-opacity-80 border-b border-b-slate-600 border-opacity-10 px-4 pt-2 mx-auto fixed">
        <nav className="max-w-2xl mx-auto flex justify-between items-center gap-x-6">
          <Link className="flex items-center" href={'/'}>
            {' '}
            <Image src={Logo} width={50} height={50} alt={'logo header'} />
            <h1 className="">Next Coffe</h1>
          </Link>
          <ul className="flex gap-x-6">
            {navMenuItems.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-slate-500" href={item.slug}>
                  {item.nameItem}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="pb-24 lg:pb-16"></div>
    </>
  );
}
