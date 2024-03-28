import styles from './blog.module.css';
import { Metadata } from 'next';
import HighlightArticle from '../_components/Blog/HighlightArticle';
import SubscribeNewsletter from '../_components/Blog/SubscribeNewsletter';
import FeaturedItems from '../_components/FeaturedItems/FeaturedItems';
import { fetchBlogArticlesData } from '../utils/api';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const blogData = await fetchBlogArticlesData();
  const foundHighLightArticleData =
    blogData.find((article: any) => article.isHighlightArticle) || blogData[0];
  const featuredArticlesData = blogData.filter(
    (article: any) => !article.isHighlightArticle,
  );
  return (
    <main
      className={`${styles} styles min-h-[1080px] lg:max-w-7xl max-w-5xl mx-auto animate-animeDown lg:py-4 flex flex-col gap-y-24`}
    >
      <HighlightArticle data={foundHighLightArticleData} />
      <FeaturedItems items={featuredArticlesData} />
      <SubscribeNewsletter />
    </main>
  );
}

export const revalidate = 300;
