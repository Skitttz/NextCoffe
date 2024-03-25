import { fetchBlogArticlesData } from '../../utils/api';
import BlogPreviewItem from './BlogPreviewItem';

const BlogPreview = async () => {
  const blogData = await fetchBlogArticlesData();
  const highLightArticleData =
    blogData.find((article: any) => article.isHighlightArticle) || blogData[0];
  const recentArticles = blogData
    .filter((article: any) => !article.isHighlightArticle)
    .slice(0, 3);

  const articlesView = [highLightArticleData, ...recentArticles];
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="text-5xl mx-auto text-center font-besley w-full font-medium">
        blog<span className="text-amber-500">.</span>
      </h2>
      <div className="grid grid-cols-2 gap-8  [&>*:nth-child(1)]:w-[108%] [&>*:nth-child(2)]:w-[70%] [&>*:nth-child(3)]:w-[105%] [&>*:nth-child(4)]:w-[95%%] justify-between">
        {articlesView.map((article: any) => (
          <BlogPreviewItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
