import Image from 'next/image';
import Link from 'next/link';

const getCoffesData = async () => {
  const resp = await fetch('https://api.sampleapis.com/coffee/hot');
  return resp.json();
};

interface CoffesItem {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  image: string;
}

export default async function CoffePage() {
  const coffes = await getCoffesData();
  return (
    <main className="bg-slate-200 animate-animeDown h-screen mt-4">
      <h1 className="text-slate-600 max-w-2xl mx-auto mb-8 text-3xl font-semibold">
        Coffe Store
      </h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-12 max-w-2xl mx-auto">
        {coffes &&
          coffes.map((item: CoffesItem, index: number) =>
            index < 16 ? (
              <ul className="mx-auto" key={index}>
                <li>
                  <Link href={''}>
                    <Image
                      className="mb-4 h-[100px] w-[100px] object-cover rounded-lg"
                      src={item.image}
                      width={100}
                      height={100}
                      alt="Imagem de Cafe"
                    />
                  </Link>
                </li>
                <li className="font-medium text-center">{item.title}</li>
              </ul>
            ) : null,
          )}
      </div>
    </main>
  );
}
