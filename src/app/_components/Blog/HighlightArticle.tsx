import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../utils/modal';

const HighlightArticle = ({ data }: Article) => {
  const { title, slug, image, content } = data;
  const lastIndex = content.lastIndexOf(' ', 450);
  return (
    <article className="grid grid-cols-2 items-center gap-x-8">
      <div className="">
        <h3 className="font-besley font-bold text-2xl">{title}</h3>
        <p className="py-8 font-inter text-base">
          {content.slice(0, lastIndex)}...
        </p>
        <Link
          className="transition-colors text-slate-200 py-2 px-5 bg-amber-900 hover:bg-amber-800 rounded-md font-medium"
          href={`/blog/${slug}`}
        >
          Read More
        </Link>
      </div>
      <Image
        className="rounded-md"
        src={image}
        width={700}
        height={100}
        alt="Image HighlightArticle"
      />
    </article>
  );
};

export default HighlightArticle;
