import axios from 'axios';
import { ButtonProps, InfoBlockProps } from '../_components/InfoBlock';
import {
  AboutBlockProps,
  AboutSectionProps,
} from '../_components/About/AboutBlock';
import Link from 'next/link';
import { getColorButton } from './colorsButton';
import { AvatarAuthorProps, ImageProps } from './modal';

const BASE_URL = process.env.BASE_API_URL || 'http://127.0.0.1:1337/api';
export const BASE_URL_MEDIA =
  process.env.BASE_API_URL_MEDIA || 'http://127.0.0.1:1337';

export async function fetchData(route: string) {
  const url = `${BASE_URL}/${route}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export async function createInfoBlocksData({ data }) {
  const infoBlocksRaw = data?.attributes?.info_blocks.data;
  return infoBlocksRaw.map((infoBlocks: InfoBlockProps) => ({
    ...infoBlocks.attributes,
    button: createInfoBlockButton(infoBlocks.attributes.button),
  }));
}

function createInfoBlockButton(buttonData: ButtonProps) {
  if (!buttonData) {
    return null;
  }
  return (
    <Link
      rel="noopener noreferrer"
      key={buttonData.id}
      href={`${buttonData.slug}`}
      className={`font-bold inline-block transition-all rounded-md shadow-sm my-4 py-2 px-4 ${getColorButton(
        buttonData.colour,
      )}`}
    >
      {buttonData.text}
    </Link>
  );
}

export async function createAboutBlocksData({ data }) {
  const aboutBlocksRaw = data?.attributes?.about_blocks.data;
  return aboutBlocksRaw.map((aboutBlocks: AboutBlockProps) => ({
    ...aboutBlocks,
  }));
}

export async function createAboutBlockPageData({
  data,
}: {
  data: AboutSectionProps;
}) {
  const aboutBlocksRaw = data?.attributes;
  if (!aboutBlocksRaw) {
    throw new Error('About blocks data is missing');
  }
  const { title, image } = aboutBlocksRaw;
  return { title, image };
}

export async function fetchBlogArticlesData() {
  const blogDataRaw = await fetchData(
    'blog-articles?sort=id:desc&populate=image&populate=author.avatar',
  );
  const { data: blogData } = blogDataRaw;
  const processedBlogArticles = blogData.map(processBlogArticle);
  return processedBlogArticles;
}
interface ArticleProps {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    author: {
      data: {
        id: number;
        attributes: {
          name: string;
          avatar: AvatarAuthorProps;
        };
      };
    };
    image: ImageProps;
  };
}

function processBlogArticle(article: ArticleProps) {
  return {
    id: article.id,
    ...article.attributes,
    image: BASE_URL_MEDIA + article.attributes?.image.data[0]?.attributes.url,
    avatarAuthor:
      BASE_URL_MEDIA +
      article.attributes.author.data?.attributes.avatar.data?.attributes.url,
  };
}
