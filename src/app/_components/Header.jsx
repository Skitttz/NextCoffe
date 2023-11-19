import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

export default function Header() {
  return (
    <header className="w-full bg-gray-200 bg-opacity-80 border-b border-b-slate-600 border-opacity-10 px-4 pt-2 mx-auto">
      <nav className="max-w-2xl mx-auto flex justify-between items-center gap-x-6">
        <Link href={'/'}>
          {' '}
          <Image src={Logo} width={50} height={50} alt={'logo header'} />
        </Link>
        <ul className="flex gap-x-6">
          <Link className="hover:text-slate-500" href={'/'}>
            Home
          </Link>
          <Link className="hover:text-slate-500" href={'/about'}>
            About
          </Link>
          <Link className="hover:text-slate-500" href={'/coffe'}>
            Coffe
          </Link>
          <Link className="hover:text-slate-500" href={'/contact'}>
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
