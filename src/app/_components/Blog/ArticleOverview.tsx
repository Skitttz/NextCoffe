import Link from 'next/link';

const ArticleOverview = ({ article }: any) => {
  const titles = article.articleContent.filter(
    (component: any) => component.__component === 'blog-article.title',
  );
  return (
    <div className="pt-12 flex justify-between">
      <div>
        <h3 className="text-2xl font-besley font-semibold mb-4">
          In This Blog
        </h3>
        <h5 className="max-w-xl">{article.content}</h5>
      </div>
      <ul className="text-right">
        {titles.map((title: any, idx: number) => (
          <li key={title.id}>
            <Link
              className="text-amber-900 underline scroll-smooth"
              href={`#${title.slug}`}
            >
              {idx + 1}. <span className="font-medium">{title.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleOverview;
