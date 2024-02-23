import Image from 'next/image';
import { formatDate } from '../../utils/date';
import { Article } from '../../utils/modal';

const ArticleIntro = ({ data: article }: Article) => {
  return (
    <div>
      <div className="bg-cover object-center mx-auto ">
        <Image
          className="w-full h-[220px] object-cover mb-8 rounded-md"
          src={article.image}
          alt="Image Article Intro"
          width={1024}
          height={220}
        />
      </div>
      <h2 className="text-4xl font-besley font-bold text-amber-950 mb-6">
        {article.title}
      </h2>
      <div className="flex flex-col text-base text-slate-950 items-end">
        <p className="">{formatDate(article.publishedAt)}</p>
        <div className="flex gap-x-2 items-center">
          <Image
            src={article.avatarAuthor}
            className="rounded-full border border-amber-200"
            alt="Avatar Image"
            width={36}
            height={36}
          />
          <p className="font-medium"> {article.author.data.attributes.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleIntro;
