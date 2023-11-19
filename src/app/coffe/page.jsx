'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CoffePage() {
  const [data, setData] = useState('');
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="bg-slate-200 animate-animeDown">
      <h1 className="text-slate-600 max-w-2xl mx-auto mb-8 text-3xl font-semibold">
        Coffe Items
      </h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-8 max-w-2xl mx-auto">
        {data &&
          data.map((item, index) =>
            index < 8 ? (
              <ul className="mx-auto" key={index}>
                <li>
                  <Image
                    className="mb-4 h-[100px] w-[100px] object-cover rounded-lg"
                    src={item.image}
                    width={100}
                    height={100}
                    alt="Imagem de Cafe"
                  />
                </li>
                <li className="semibold">{item.title}</li>
                <li className="block mt-4 text-sm text-slate-800 text-justify">
                  {item.description}
                </li>
              </ul>
            ) : null,
          )}
      </div>
    </main>
  );
}
