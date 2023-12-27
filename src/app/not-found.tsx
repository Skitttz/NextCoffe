import Link from 'next/link';
import NotFoundImage from '../../public/coffe_notfound404.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto pt-4 flex flex-col font-roboto">
      <div className="grid grid-cols-[2fr,1fr] justify-center items-center">
        <div>
          <Image
            src={NotFoundImage}
            width={500}
            height={300}
            alt="NotFound Image"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-4 text-center">
          <h1 className="text-3xl p-2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-md text-slate-200 ">
            Error 404
          </h1>
          <div className="mb-4">
            <h2 className="text-lg">Page is Not Found</h2>
            <p>☕✨</p>
          </div>
          <Link
            href={'/'}
            className="p-2 bg-gray-200 border border-amber-800 rounded-sm mx-auto transition-all hover:bg-amber-800 hover:text-slate-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
