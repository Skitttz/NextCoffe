import ArticleIntro from '../../_components/Blog/ArticleIntro';
import { fetchBlogArticlesData, fetchData } from '../../utils/api';

export default async function Page({ params }) {
  const { slug: articleSlug } = params;
  const articles = await fetchBlogArticlesData();
  const articleFindBySlug = articles.find(
    (article: any) => article.slug === articleSlug,
  );
  return (
    <main className="max-w-5xl mx-auto py-12">
      <ArticleIntro data={articleFindBySlug} />
    </main>
  );
}

export async function generateStaticParams() {
  const articleRawData = await fetchData('blog-articles');
  const articleData = articleRawData.data;
  return articleData.map((article: any) => ({
    article: article.attributes.slug,
  }));
}

export const revalidate = 300;
