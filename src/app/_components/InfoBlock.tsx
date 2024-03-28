import Image from 'next/image';
import { BASE_URL_MEDIA } from '../utils/api';
import ReactMarkdown from 'react-markdown';
import React, { ReactNode } from 'react';

export interface InfoBlockProps {
  id: number;
  attributes: ExtendedInfoBlockContent;
}

export interface ButtonProps {
  id: number;
  colour: string;
  slug: string;
  text: string;
}

interface InfoBlockContent {
  title: string;
  content: string;
  showImageRight: boolean;
  createdAt: string;
  updatedAt: string;
  image: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
        alternativeText: string;
      };
    };
  };
  button: JSX.Element;
}

export interface ExtendedInfoBlockContent
  extends Omit<InfoBlockContent, 'button'> {
  button: ButtonProps;
}
const InfoBlock = ({ data }: { data: InfoBlockContent }) => {
  const { title, content, showImageRight, image, button } = data;
  const imageUrl = image?.data?.attributes?.url || null;
  const altText = image?.data?.attributes?.alternativeText;

  return (
    <div>
      <div className="py-12 gap-x-12 grid grid-cols-[1fr,1fr] items-center">
        <div>
          <Image
            src={BASE_URL_MEDIA + imageUrl}
            width={900}
            height={1200}
            alt={altText || ''}
            className={`rounded-sm shadow-sm object-contain ${
              showImageRight ? 'col-start-2 col-end-3' : ''
            }`}
          />
        </div>
        <div className={` ${showImageRight ? 'row-end-1' : ''}`}>
          <h1 className="text-amber-950 text-4xl font-besley inline-block">
            {title}
            <span className="text-yellow-600 inline-block">.</span>
          </h1>
          <ReactMarkdown className="mt-8 copy text-gray-800">
            {content}
          </ReactMarkdown>
          {button}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
