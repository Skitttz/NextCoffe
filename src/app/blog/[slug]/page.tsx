import ArticleComponent from '../../_components/Blog/ArticleComponent';
import ArticleIntro from '../../_components/Blog/ArticleIntro';
import ArticleOverview from '../../_components/Blog/ArticleOverview';
import FeaturedItems from '../../_components/FeaturedItems/FeaturedItems';
import { fetchBlogArticlesData, fetchData } from '../../utils/api';

export default async function Page({ params }) {
  const { slug: articleSlug } = params;
  const articles = await fetchBlogArticlesData();
  const articleFindBySlug = articles.find(
    (article: any) => article.slug === articleSlug,
  );

  const moreArticle = articles.filter(
    (article: any) => article.slug !== articleSlug,
  );
  return (
    <main className="lg:max-w-7xl max-w-5xl mx-auto py-12">
      <ArticleIntro data={articleFindBySlug} />
      <ArticleOverview article={articleFindBySlug} />
      {articleFindBySlug.articleContent.map((component: any) => (
        <ArticleComponent key={component.id} component={component} />
      ))}
      <FeaturedItems items={moreArticle} title={'Explore others Articles'} />
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
