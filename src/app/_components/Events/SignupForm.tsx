'use client';
import { useState } from 'react';
import Link from 'next/link';

const SignupForm = ({ title, infoText }) => {
  const [formData, setFormData] = useState({});
  return (
    <section className="grid grid-cols-[1fr,1fr] gap-x-8 items-center">
      <div className="mt-8">
        <h3 className="text-4xl font-bold font-besley text-amber-950 mb-4">
          {title}
        </h3>
        <p className="font-roboto max-w-xl">{infoText}</p>
      </div>
      <div>
        <p className="text-center bg-slate-100 rounded-sm border border-amber-600 border-opacity-20 p-2">
          To participate in the event you need to be a NextCoffe user, Please
          log in to your account by{' '}
          <Link href={'/login'} className="font-bold text-amber-600">
            clicking here.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
