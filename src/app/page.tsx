import Image from 'next/image';
import Link from 'next/link';
import InfoBlock from '../app/_components/InfoBlock';
import coffeImage from '../../public/coffe_home.png';
import { createInfoBlocksData, fetchData } from './utils/api';

export default async function Home() {
  const dataInfobBlocksRaw = await fetchData(
    'infoblocks-home?populate[info_blocks][populate]=image&populate[info_blocks][populate]=button',
  );
  const DateInfoBlock = await createInfoBlocksData(dataInfobBlocksRaw);

  return (
    <main className="animate-animeFade min-h-screen max-w-5xl mx-auto">
      <div className=" divide-y-4 divide-yellow-400">
        <div className="grid grid-cols-[2fr,1fr] gap-x-4 h-[auto] pb-24">
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
                className="p-3 border border-green-800 hover:border-amber-950 rounded-md transition-colors hover:text-slate-950 hover:bg-gray-200 "
                href={'/blog'}
              >
                Go to blog
              </Link>
              <Link
                className="p-3 border border-slate-700 border-opacity-20 rounded-md bg-gradient-to-r from-green-600 to-green-700 hover:bg-green-700 transition-all text-slate-100 hover:animate-pulse translate-x-0 hover:translate-x-4"
                href={'/coffe'}
              >
                Shop now{' '}
                <span className="inline-block transition-all translate-x-0 hover:translate-x-2">
                  {' '}
                  →
                </span>
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
      {DateInfoBlock.map((info: any, index: number) => (
        <InfoBlock key={index} data={info} />
      ))}
    </main>
  );
}
