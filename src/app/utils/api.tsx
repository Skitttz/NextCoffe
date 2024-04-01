import axios from 'axios';
import { ButtonProps, InfoBlockProps } from '../_components/InfoBlock';
import {
  AboutBlockProps,
  AboutSectionProps,
} from '../_components/About/AboutBlock';
import Link from 'next/link';
import { getColorButton } from './colorsButton';
import { AvatarAuthorProps, ImageProps } from './modal';
import qs from 'qs';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || 'http://127.0.0.1:1337/api';
export const BASE_URL_MEDIA =
  process.env.NEXT_PUBLIC_BASE_API_URL_MEDIA || 'http://127.0.0.1:1337';

export async function fetchData(route: string) {
  const url = `${BASE_URL}/${route}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error(`Ow no! Api is not working! :(`);
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
  //Populate(query's) Article => image(media), author.avatar(relation one-to-many) , articleContent(component)
  const blogDataRaw = await fetchData(
    'blog-articles?sort=id:desc&populate=image&populate=author.avatar&populate=articleContent.image',
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

export async function fetchIndividualEvent(eventId) {
  const response = await axios.get(`${BASE_URL}/api/events/${eventId}`);
  return response;
}

function processEventData(event: any) {
  return {
    ...event.attributes,
    id: event.id,
    image: BASE_URL_MEDIA + event.attributes?.image.data?.attributes.url,
  };
}

export async function fetchAllEvents() {
  const query = qs.stringify(
    {
      pagination: {
        start: 0,
        limit: 12,
      },
      sort: ['initialDate:asc'],
      filters: {
        initialDate: {
          $gt: new Date(),
        },
      },
      populate: {
        image: {
          populate: '*',
        },
      },
    },
    { encodeValuesOnly: true },
  );
  const response = await axios.get(`${BASE_URL}/events?${query}`);
  return response.data?.data.map((event: any) => processEventData(event));
}
