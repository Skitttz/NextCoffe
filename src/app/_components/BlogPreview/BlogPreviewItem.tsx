import Image from 'next/image';
import { extractImageUrl } from '../../utils/extractImage';
import { formatDate } from '../../utils/date';
import Link from 'next/link';

const BlogPreviewItem = ({ article }: any) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      key={article.id}
      className="p-4 border border-slate-200 mx-auto shadow-sm rounded-md h-[320px] bg-amber-50 bg-opacity-50"
    >
      <div className="">
        <Image
          className="object-cover w-full rounded-md max-h-[180px]"
          src={article.image}
          alt="Image Article"
          width={400}
          height={180}
        />{' '}
      </div>
      <div className="">
        <h5 className="text-xl text-amber-950 font-besley font-medium mt-3 max-w-[400px]">
          {article.title}
        </h5>
        <p className="text-sm mt-1">{formatDate(article.publishedAt)}</p>
      </div>
    </Link>
  );
};

export default BlogPreviewItem;
