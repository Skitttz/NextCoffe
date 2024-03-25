import ArticleParagraph from './ArticleParagraph';
import ArticleParagraphImage from './ArticleParagraphImage';
import ArticleTitle from './ArticleTitle';
import LandscapeImage from './LandscapeImage';

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split('blog-article.')[1];
  switch (componentType) {
    case 'title':
      return <ArticleTitle component={component} />;
    case 'paragraph':
      return <ArticleParagraph component={component} />;
    case 'paragraph-with-image':
      return <ArticleParagraphImage component={component} />;
    case 'landscape-image':
      return <LandscapeImage imageData={component} />;
    default:
      return <h1>[404]Componente Not Found</h1>;
  }
};

export default ArticleComponent;
