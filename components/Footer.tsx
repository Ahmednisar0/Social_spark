import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (<div className=' mt-10 ' >
    <div className=' border border-gray-300 lg:w-[1200px] w-[350px] ml-[27px] lg:ml-[100px] ' ></div>
    <header className="flex flex-col lg:flex-row justify-between space-y-5 lg:w-[1200px]  items-center lg:ml-[100px]   p-6  text-white ">
      {/* Left side: Logo */}
      <div className="flex items-center rounded-lg">
        <Image
          src="/images/logo.png"
          alt="Social Spark Logo"
          width={50}
          height={50}
          className='rounded-lg'
        />
        <span className="ml-3 font-bold text-lg">Social Spark</span>
      </div>

      {/* Center: Navigation Links */}
      <nav className="flex space-x-8">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#aboutus" className="hover:text-gray-300">About Us</a>
      </nav>

      {/* Right side: Stay Connected */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3 border border-gray-300 p-4 rounded">
          <div className="flex space-x-3">
          <span className="ml-2 items-center flex">Stay Connected :</span>
            <img
              src="/images/socialicon.png.png"
              alt="Social Icon 1"
              width={45}
              height={50}
            />
            <img
              src="/images/socialicon1.png.png"
              alt="Social Icon 2"
              width={45}
              height={50}
            />
            <img
              src="/images/socialicon2.png.png"
              alt="Social Icon 3"
              width={45}
              height={50}
            />
          </div>
         
        </div>
      </div>

      {/* Footer content */}
      
    </header>
    <div className='justify-between flex-col lg:flex-row lg:ml-[125px] lg:mt-[60px]  flex lg:w-[1100px] '  >
        <div className="  flex flex-col lg:flex-row  items-start lg:space-x-4 ">
        <div className="flex items-center ml-[50px] lg:ml-0 lg:space-x-2  ">
          <FaEnvelope className='text-[#9EFF00]' />
          <span className='text-gray-300'>socialspark@allrightreserved</span>
        </div>
        <div className="flex items-center ml-[50px] lg:ml-0 lg:space-x-2 ">
          <FaPhone className='text-[#9EFF00]' />
          <span className='text-gray-300'>+1 234 567 890</span>
        </div>
      </div>

      {/* @Allright Reserved at the right bottom */}
      <div className=" text-sm flex justify-center items-center mt-4 text-gray-300">
        <span>SocialSpark@All Rights Reserved</span>
      </div>
        </div></div>
  );
};

export default Footer;
