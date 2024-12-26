// components/Img.tsx

import React from 'react';
import Image from 'next/image';

const Img: React.FC = () => {
  return (
    <section className="relative mt-10 w-full h-[336px]">
      <Image
        src="/images/Text Container.png" 
        alt="Text Container"
        className="w-full  h-[336px] object-cover"
        width={1200} 
        height={336}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  bg-opacity-50">
        <h1 className="text-white text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-300 text-sm text-center">
          Transform your brand with our innovative digital solutions that captivate and engage your audience.
        </p>
      </div>
    </section>
  );
};

export default Img;
