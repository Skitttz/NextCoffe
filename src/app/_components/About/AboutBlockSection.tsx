import Image from 'next/image';
import {
  BASE_URL_MEDIA,
  createAboutBlockPageData,
  createAboutBlocksData,
  fetchData,
} from '../../utils/api';
import AboutBlock from './AboutBlock';
const AboutBlockSection = async () => {
  const dataAboutbBlocksRaw = await fetchData(
    'aboutblocks-about?populate=about_blocks&populate=image',
  );
  const DateAboutBlock = await createAboutBlocksData(dataAboutbBlocksRaw);
  const DateAboutSection = await createAboutBlockPageData(dataAboutbBlocksRaw);
  const { title } = DateAboutSection;
  const { url: ImageUrl, alternativeText } =
    DateAboutSection.image.data.attributes;
  return (
    <>
      <h2 className="text-3xl mb-6 font-semibold font-besley text-amber-950">
        {title}
      </h2>
      <div className=" grid grid-cols-[2fr,1fr] gap-x-8">
        <ul className="flex flex-col gap-y-4">
          {DateAboutBlock.map((info: any, index: number) => (
            <AboutBlock key={index} data={info} />
          ))}
        </ul>
        <Image
          className="rounded-lg"
          src={BASE_URL_MEDIA + ImageUrl}
          width={400}
          height={800}
          alt={alternativeText}
        />
      </div>
    </>
  );
};

export default AboutBlockSection;
