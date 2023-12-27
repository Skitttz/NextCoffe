import Image from 'next/image';
import PhotoSobre from '../../../public/cafe_sobre.jpg';

interface AboutItems {
  title: string;
  content: string;
}

export default function AboutPage() {
  const contentAbout = [
    {
      title: 'Our Journey Unveiled',
      content: `In the heart of Brazil (Aracaju/Sergipe), nestled amidst the bustling streets, Next Coffee emerged in 1999 as more than just a coffee shop; it became a captivating tale of craftsmanship, camaraderie, and the pursuit of extraordinary coffee.`,
    },
    {
      title: 'Founding Roots',
      content: `Our story began with Skittz, a visionary coffee aficionado, who embarked on a mission to create a haven where every sip was an experience. Driven not only by the love of coffee but also by a desire to establish a space that transcended the ordinary—a place where the aroma of freshly ground beans beckoned wanderers to a sanctuary of flavor.`,
    },
    {
      title: 'The Artistry of Baristas',
      content: `Step into Next Coffee, and you'll encounter more than just a coffee counter; you'll witness a gallery of artistry. Our baristas, trained in the delicate dance of espresso extraction and milk frothing, bring each cup to life. Every swirl of latte art, every perfectly pulled shot, is a brushstroke in the canvas of your coffee experience.`,
    },
  ];

  return (
    <main className="min-h-[1080px] max-w-2xl mx-auto animate-animeDown lg:py-2">
      <h2 className="text-3xl mb-6 font-semibold ">About</h2>
      <div className=" grid grid-cols-2 gap-x-8">
        <div>
          <ul className="flex flex-col gap-y-4">
            {contentAbout.map((itemsAbout: AboutItems, index: number) => (
              <li key={index}>
                <span className="font-bold font-besley">
                  [{itemsAbout.title}]{' '}
                </span>
                {itemsAbout.content}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="rounded-lg"
          src={PhotoSobre}
          width={400}
          height={800}
          alt="Imagem Pessoa Sobre"
        />
      </div>
    </main>
  );
}
