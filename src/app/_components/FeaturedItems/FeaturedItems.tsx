'use client';
import { useState } from 'react';
import FeaturedArticle from './FeaturedArticle';
import FeaturedEvent from './FeaturedEvents';

const FeaturedItems = ({ items, title, itemType }: any) => {
  const [numberArticle, setNumberArticle] = useState(3);
  const onShowMoreArticle = () => {
    if (numberArticle + 3 > items.length) {
      return setNumberArticle(items.length);
    }
    return setNumberArticle(numberArticle + 3);
  };
  return (
    <section className="flex flex-col">
      <h3 className="text-amber-950 text-2xl text-left font-besley font-bold py-8">
        {title || 'Articles in the blog '}
      </h3>
      <div className="grid grid-cols-3 gap-x-8">
        {items.slice(0, numberArticle).map((item: any, index: number) => {
          if (itemType === 'article') {
            return <FeaturedArticle key={item.slug} data={item} />;
          } else {
            return <FeaturedEvent key={index} data={item} />;
          }
        })}
      </div>
      {numberArticle < items.length && (
        <button
          className="py-3 px-4 text-slate-600 bg-amber-100 mt-12 rounded-md mx-auto"
          onClick={onShowMoreArticle}
        >
          Show me more
        </button>
      )}
    </section>
  );
};

export default FeaturedItems;
