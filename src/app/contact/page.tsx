import Image from 'next/image';
import iconInstagram from '../../../public/icon-instagram.svg';
import iconMail from '../../../public/icon-email.svg';

interface socialLinksInterface {
  nameSocialLink: string;
  pathIcon: any;
  socialLinkHref: string;
  altIcon: string;
}

export default function Contact() {
  const socialLinks = [
    {
      nameSocialLink: 'Instagram',
      pathIcon: iconInstagram,
      socialLinkHref: '/',
      altIcon: 'Icon Instagram',
    },
    {
      nameSocialLink: 'Email',
      pathIcon: iconMail,
      socialLinkHref: '/',
      altIcon: 'Icon Email',
    },
  ];

  return (
    <main className="min-h-[1080px] max-w-2xl mx-auto animate-animeDown">
      <div className=" grid grid-cols-2 gap-x-8 mt-6">
        <div>
          <h2 className="block text-lg text-center mb-3 font-medium">
            Business Hours
          </h2>
          <ul className="flex flex-col">
            <li> Monday to Friday: 8 AM - 6 PM </li>
            <li>Saturday: 9 AM - 5 PM </li>
            <li> Sunday: Closed</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="block text-lg text-center mb-3 font-medium">
            Social Links
          </h2>
          {socialLinks.map((items: socialLinksInterface, index: number) => (
            <li className="flex gap-x-2" key={index}>
              <a href={items.socialLinkHref} target="_blank">
                <Image
                  src={items.pathIcon}
                  width={26}
                  height={26}
                  alt={items.altIcon}
                />
              </a>
              <span>{items.nameSocialLink}</span>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
}
