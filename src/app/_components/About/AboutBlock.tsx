interface ImageProps {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
      alternativeText: string;
    };
  };
}

export interface AboutBlockProps {
  id: number;
  attributes: {
    title: string;
    content: string;
  };
}

export interface AboutSectionProps {
  id: number;
  attributes: {
    title: string;
    AboutBlock: AboutBlockProps;
    image: ImageProps;
  };
}

const AboutBlock = ({ data }: { data: AboutBlockProps }) => {
  const { title, content } = data.attributes;
  return (
    <li className="flex flex-col gap-y-4">
      <p>
        <span className="font-bold font-besley">{title} </span>
        {content}
      </p>
    </li>
  );
};

export default AboutBlock;
