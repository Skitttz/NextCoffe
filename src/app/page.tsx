import Image from 'next/image';
import Link from 'next/link';
import InfoBlock from '../app/_components/InfoBlock';
import coffeImage from '../../public/coffe_home.png';

export default function Home() {
  return (
    <main className="animate-animeFade h-screen max-w-5xl mx-auto">
      <div className=" divide-y-4 divide-yellow-400">
        <div className="grid grid-cols-[2fr,1fr] gap-x-4 h-[auto]">
          <div className="flex flex-col gap-y-4 my-auto">
            <h3 className={`font-medium text-amber-900 text-xl`}>
              A simple pleasure for{' '}
              <span className="font-semibold">everyone</span>
            </h3>
            <h2 className={`font-besley text-7xl`}>
              Good <span className="text-amber-950 ">Coffe</span>
            </h2>
            <p className="font-light text-amber-950">
              In the aromatic universe, each bean is a story waiting to be told,
              and each cup is a unique sensory journey. With each cup, embark on
              a sensory journey through rich earthy notes and subtle fruity
              hints. Becomes a gateway to a transcendent experience, blending
              tradition and innovation. Explore the world within each aromatic
              brew.
            </p>
            <div className="flex gap-x-4 font-besley">
              <Link
                className="p-3 border border-slate-700 border-opacity-20 rounded-md bg-gradient-to-r from-green-600 to-green-700 hover:bg-green-700 transition-colors text-slate-100 hover:animate-pulse"
                href={'/coffe'}
              >
                Shop now!
              </Link>
              <Link
                className="p-3 border border-green-800 hover:border-amber-950 rounded-md transition-colors hover:text-slate-950 hover:bg-gray-200 "
                href={'/'}
              >
                Go to blog
              </Link>
            </div>
          </div>
          <div className="my-auto">
            <Image
              src={coffeImage}
              width={1200}
              height={600}
              alt="Image Coffe Home"
            />
          </div>
        </div>
      </div>
      <InfoBlock />
    </main>
  );
}
