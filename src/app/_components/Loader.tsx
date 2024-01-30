import React from 'react';
import loading from '../../Assets/i-loading-custom.svg';
import Image from 'next/image';

const CustomLoading = () => {
  return (
    <div className="fixed my-auto inset-0 items-center justify-center align-middle">
      <div>
        <Image
          src={loading}
          alt="loading"
          width={16}
          height={16}
          className="animate-spin h-16 w-16 opacity-80 fill-blue-500"
        />
      </div>
    </div>
  );
};

export default CustomLoading;
