import ReactMarkDown from 'react-markdown';
import styles from '../../blog/blog.module.css';

const ArticleParagraph = ({ component }) => {
  return (
    <div className="py-2">
      <ReactMarkDown className={`${styles.richtext}`}>
        {component.paragraph}
      </ReactMarkDown>
    </div>
  );
};

export default ArticleParagraph;
