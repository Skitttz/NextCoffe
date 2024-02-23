import Image from 'next/image';
import iconInstagram from '../../../public/icon-instagram.svg';
import iconMail from '../../../public/icon-email.svg';
import iconWhatsapp from '../../../public/icon-whatsapp.svg';
import coffeContact from '../../../public/coffe_contact.png';
import { coffeStoreStatus } from '../utils/coffeeStoreStatus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

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
      nameSocialLink: 'Whatsapp',
      pathIcon: iconWhatsapp,
      socialLinkHref: '/',
      altIcon: 'Icon Whatsapp',
    },
    {
      nameSocialLink: 'Email',
      pathIcon: iconMail,
      socialLinkHref: '/',
      altIcon: 'Icon Email',
    },
  ];

  return (
    <main className="min-h-[1080px] max-w-5xl mx-auto animate-animeDown">
      <div className=" grid grid-cols-[1fr,1fr] gap-x-8 mt-6">
        <div className="flex flex-col gap-y-4">
          <div className="pb-4 ">
            <h2 className="block text-amber-950 font-besley text-xl text-center mb-3 font-medium border-b border-b-amber-950 border-opacity-10 rounded-xl">
              Business Hours 🕒
            </h2>
            <ul className="flex flex-col p-2">
              <li>
                {' '}
                Monday to Friday: <span className=" ">8 AM - 6 PM</span>{' '}
              </li>
              <li>
                Saturday: <span className="">9 AM - 5 PM</span>{' '}
              </li>
              <li>
                {' '}
                Sunday: <span className="text-red-700 font-bold">
                  Closed
                </span>{' '}
              </li>
              <li className="mt-8 border justify-self-center border-x-slate-300 rounded-md p-2 text-center text-amber-950 font-medium">
                {coffeStoreStatus()}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3 mt-8">
            <h2 className="block text-amber-950 font-besley text-xl text-center mb-3 font-medium border-b border-b-amber-950 border-opacity-10 rounded-xl">
              Contact Links 💬
            </h2>
            {socialLinks.map((items: socialLinksInterface, index: number) => (
              <li className="flex gap-x-2 items-center" key={index}>
                <a href={items.socialLinkHref} target="_blank">
                  <Image
                    src={items.pathIcon}
                    width={24}
                    height={24}
                    alt={items.altIcon}
                  />
                </a>
                <span>{items.nameSocialLink}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="inline-block mx-auto">
          <Image
            src={coffeContact}
            width={600}
            height={600}
            alt="Coffe Image Contact"
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
