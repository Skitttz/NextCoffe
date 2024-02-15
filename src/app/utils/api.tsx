import axios from 'axios';
import { ButtonProps, InfoBlockProps } from '../_components/InfoBlock';
import Link from 'next/link';
import { getColorButton } from './colorsButton';

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
      className={`inline-block transition-all rounded-md shadow-sm mt-4 py-2 px-4 ${getColorButton(
        buttonData.colour,
      )}`}
    >
      {buttonData.text}
    </Link>
  );
}