import Image from 'next/image';
import { extractImageUrl } from '../../utils/extractImage';

const LandscapeImage = ({ imageData }: any) => {
  const { imageCaption } = imageData;
  return (
    <div className={`flex flex-col shadow-sm w-full mx-auto max-w-xl my-4`}>
      {imageData && (
        <Image
          src={extractImageUrl(imageData)}
          className={`w-full rounded-t-sm`}
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
  );
};

export default LandscapeImage;
