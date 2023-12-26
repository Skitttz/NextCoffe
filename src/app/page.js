import Image from 'next/image';
import Link from 'next/link';
import coffeImage from '../../public/coffe_home.png';

export default function Home() {
  return (
    <main className="h-screen animate-animeDown">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[500px,1fr] gap-x-4 h-screen">
          <div className="flex flex-col gap-y-4 my-auto">
            <h3 className={`font-medium text-amber-950 text-xl`}>
              A simple pleasure for everyone
            </h3>
            <h2 className={`font-besley text-7xl`}>Good Coffe</h2>
            <p className="text-sm font-light">
              In the aromatic universe, each bean is a story waiting to be told,
              and each cup is a unique sensory journey.
            </p>
            <div className="flex gap-x-4">
              <Link
                className="p-3 border border-green-900 hover:border-amber-950 rounded-md transition-colors hover:text-slate-100 hover:bg-amber-800"
                href={'/'}
              >
                Go to blog
              </Link>
              <Link
                className="p-3 border border-slate-700 rounded-md bg-green-800 hover:bg-green-700 transition-colors text-slate-100"
                href={'/'}
              >
                Shop now!
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
    </main>
  );
}
