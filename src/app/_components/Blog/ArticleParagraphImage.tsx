import Image from 'next/image';
import styles from '../../blog/blog.module.css';
import { extractImageUrl } from '../../utils/extractImage';
import ReactMarkDown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const ArticleParagraphImage = ({ component }) => {
  // isLandscape:  image that has a horizontal orientation,
  const { paragraph, imageCaption, isLandscape, imageShowsRight } = component;
  return (
    <div
      className={`py-2 flex justify-between gap-x-8 ${
        imageShowsRight ? '' : 'flex-row-reverse'
      }`}
    >
      <div className={`${isLandscape ? 'max-w-xl' : 'w-[80%]'}`}>
        <ReactMarkDown
          rehypePlugins={[rehypeRaw]}
          className={`${styles.richText}`}
        >
          {paragraph}
        </ReactMarkDown>
      </div>
      <div
        className={`flex flex-col shadow-sm ${
          isLandscape ? 'w-full' : 'max-w-[180px]'
        }`}
      >
        {component && (
          <Image
            src={extractImageUrl(component)}
            className={`${
              isLandscape
                ? 'w-full'
                : 'object-cover object-center min-h-[400px]'
            }`}
            width={600}
            height={200}
            alt="Image"
          />
        )}
        {imageCaption && (
          <span className="select-none text-slate-700 rounded-b-md text-sm py-2 px-2 bg-gray-600 bg-opacity-5">
            {imageCaption}
          </span>
        )}
      </div>
    </div>
  );
};

export default ArticleParagraphImage;
