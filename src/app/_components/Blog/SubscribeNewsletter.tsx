'use client';
import { useState } from 'react';
import { regexEmail } from '../../utils/regex';
import axios from 'axios';
import Emoji from '../../views/Emoji';

interface ErrorObject {
  isError: boolean;
  message: string;
}

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [hasSignedUp, setHasSignedUp] = useState<boolean>(false);
  const [error, setError] = useState<ErrorObject>({
    isError: false,
    message: '',
  }); // show message error

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (email.length !== 0 && regexEmail.test(email)) {
        await axios
          .post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`,
            {
              data: {
                email,
              },
            },
          )
          .then(() => {
            setHasSignedUp(true);
            setError({ isError: false, message: '' });
          });
      }
    } catch (err) {
      setError({
        isError: true,
        message:
          err.response.data.error.status === 400 &&
          err.response.data.error.name === 'ValidationError' &&
          'Sorry, this email has already been used',
      });
    }
  };

  return (
    <section className="grid grid-cols-[1.5fr,1fr] items-center min-h-[150px] gap-x-12 bg-slate-1 00 p-6 rounded-md shadow-sm border-l-2 border-l-amber-500 border-opacity-40 ">
      {hasSignedUp && error.isError === false ? (
        <div className="w-full col-span-full">
          <h4 className="font-besley font-semibold text-xl animate-animeFade text-center text-amber-950">
            Thank you for signing up four our newsletter{' '}
            <Emoji symbol="☕✨🤎" label="cup coffe, stars, heart brown" />
          </h4>
        </div>
      ) : (
        <>
          <div className="">
            <h4
              className="font-besley font-semibold text-xl text-amber-950"
              aria-label="title newsletter"
            >
              Subscribe for Coffee Deals & Fresh Blog News
            </h4>
            <p
              className="text-gray-800 mt-4"
              aria-label="description newsletter"
            >
              Start Your Day Right! Energize your mornings with a jolt of flavor
              and knowledge! Sign up to receive new offers and promotions and
              elevate your coffee experience!
            </p>
          </div>
          <form className="flex w-full relative" onSubmit={onSubmit}>
            <input
              className={`transition-colors p-2 rounded-l-md outline-none w-full font-besley border ${
                error.isError === true && 'border-red-600'
              }`}
              type="email"
              onChange={onChange}
              value={email}
              placeholder="Enter your E-mail adress"
            />
            {error.isError ? (
              <span className="absolute text-sm top-12 text-red-600 animate-animeDown">
                {error.message}
              </span>
            ) : (
              ''
            )}
            <button
              type="submit"
              className={`py-2 px-4 bg-amber-500 rounded-r-md transition-all text-slate-900 hover:bg-amber-400 hover:text-slate-600 font-normal border border-transparent ${
                error.isError === true && 'border-inherit border-red-600'
              }`}
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default SubscribeNewsletter;
