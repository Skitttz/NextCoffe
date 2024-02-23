import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';

export default function Footer() {
  const polices = [
    { nameItem: 'Terms of use', slug: '/terms-of-use' },
    { nameItem: 'Privacy Policy', slug: '/privacy-policy' },
    { nameItem: 'Imprint', slug: '/imprint' },
  ];
  return (
    <footer className="w-full font-roboto bg-opacity-80 border-t border-t-slate-600 border-opacity-5 px-4 py-1 mx-auto mt-24">
      <nav className="max-w-2xl mx-auto flex justify-center items-center gap-x-4 text-sm text-slate-800 ">
        <Link href={'/'}>
          {' '}
          <Image src={Logo} width={50} height={50} alt={'logo header'} />
        </Link>
        <div className="flex items-center text-center">
          <p> ©2024, Next Coffe |</p>
          <p className="font-light text-xs ml-1">
            Produced by
            <a
              className="text-slate-950 font-medium"
              href="https://github.com/Skitttz"
              target="_blank"
            >
              {' '}
              @Skittz
            </a>
          </p>
        </div>
      </nav>
    </footer>
  );
}
