'use client';
import { useState } from 'react';
import { regexEmail } from '../../utils/regex';
const SubscribeNewsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [hasSignedUp, setHasSignedUp] = useState<boolean>(false);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target } = event;
    setEmail(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.length && regexEmail.test(email)) {
      setHasSignedUp(true);
    }
  };

  return (
    <section className="grid grid-cols-[1.5fr,1fr] items-center min-h-[150px] gap-x-12 bg-slate-200 p-6 rounded-md shadow-sm border-l-2 border-l-amber-500 border-opacity-40 ">
      {hasSignedUp ? (
        <h4 className="font-besley font-semibold text-xl animate-animeFade col-span-full text-center text-amber-950">
          Thank you for signing up four our newsletter
        </h4>
      ) : (
        <>
          <div>
            <h4 className="font-besley font-semibold text-xl text-amber-950">
              Subscribe for Coffee Deals & Fresh Blog News
            </h4>
            <p className="text-gray-800 mt-4">
              Start Your Day Right! Energize your mornings with a jolt of flavor
              and knowledge! Sign up to receive new offers and promotions and
              elevate your coffee experience!
            </p>
          </div>
          <form className="flex w-full" onSubmit={onSubmit}>
            <input
              className="p-2 rounded-l-md outline-none w-full font-besley "
              type="email"
              onChange={onChange}
              value={email}
              placeholder="Enter your E-mail adress"
            />
            <button
              className="py-2 px-4 bg-amber-500 rounded-r-md transition-all text-slate-900 hover:bg-amber-400 hover:text-slate-600 font-bold"
              type="submit"
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
