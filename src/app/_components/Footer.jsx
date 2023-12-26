import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

export default function Footer() {
  const polices = [
    { nameItem: 'Terms of use', slug: '/terms-of-use' },
    { nameItem: 'Privacy Policy', slug: '/privacy-policy' },
    { nameItem: 'Imprint', slug: '/imprint' },
  ];
  return (
    <header className="w-full bg-gray-200 bg-opacity-80 border-t border-t-slate-600 border-opacity-10 px-4 pt-2 mx-auto mt-24">
      <nav className="max-w-2xl mx-auto flex justify-center items-center gap-x-4 text-sm">
        <Link href={'/'}>
          {' '}
          <Image src={Logo} width={50} height={50} alt={'logo header'} />
        </Link>
        <div className="flex flex-col items-center text-center">
          <p>
            Produced by
            <a
              className="text-slate-600"
              href="https://github.com/Skitttz"
              target="_blank"
            >
              {' '}
              @Skittz
            </a>
          </p>
          <p>©Next Coffe - All rights reserved</p>
        </div>
      </nav>
    </header>
  );
}
