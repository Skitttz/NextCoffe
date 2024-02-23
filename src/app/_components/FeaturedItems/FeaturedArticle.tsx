import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../utils/modal';
import { formatDate } from '../../utils/date';

const FeaturedArticle = ({ data: article }: Article) => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="bg-gray-100 rounded-md flex flex-col gap-y-6 shadow-sm h-[24rem]">
        <Image
          className="h-[190px] rounded-t-md w-full"
          src={article.image}
          width={300}
          height={190}
          alt=""
        />
        <div className="bg-gray-50 rounded-md h-[150px] py-2 mx-2 px-2 rounded-b-sm ">
          <h5 className="mt-2 font-besley font-bold text-lg text-amber-950 min-h-[100px]">
            {article.title}
          </h5>
          <p className="text-sm">{formatDate(article.publishedAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
