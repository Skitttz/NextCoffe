import Image from 'next/image';
import PhotoSobre from '../../../public/cafe_sobre.jpg';

export default function AboutPage() {
  return (
    <main className="min-h-[1080px] max-w-2xl mx-auto animate-animeDown">
      <h2 className="text-3xl mb-6 font-semibold ">About</h2>
      <div className=" grid grid-cols-2 gap-x-8">
        <div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur nisi id diam venenatis, eget iaculis nunc tempor. Ut
            pulvinar, nisi nec vehicula luctus, nibh tortor gravida massa, a
            suscipit velit purus non enim. Aliquam ut magna eu felis ultrices
            eleifend. Nullam tellus dui, iaculis et venenatis vitae, lobortis
            vel erat. Praesent pulvinar neque nec diam ullamcorper mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Duis vulputate faucibus metus a faucibus. Cras
            ac justo vel velit interdum placerat. Curabitur venenatis
            condimentum est vel vestibulum. Integer sit amet dapibus nunc.
            Pellentesque lacinia tellus vel sapien ultricies luctus non.
          </p>
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
