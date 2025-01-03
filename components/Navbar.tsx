'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex lg:ml-[120px] lg:mr-[110px]  items-center justify-between p-4 ">
        {/* Logo */}
        <div className="flex lgml-[130px] items-center space-x-2">
          <img src="/images/logo.png" alt="Social Spark Logo" className="w-8 h-8 rounded-lg" />
          <span className="text-white font-bold text-xl">Social Spark</span>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-[#9EFF00] text-black p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex hidden  space-x-4 text-gray-300 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="/" className="hover:text-white">Home</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/about" className="hover:text-white">About Us</a>
        </div>

        {/* Contact Us Button (Visible on larger screens) */}
        <button className="bg-[#9EFF00] text-black px-4 py-2 rounded hover:bg-green-500 hidden lg:block">
          Contact Us
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 text-white space-y-4 p-4 flex flex-col items-center">
          <a href="/" className="block hover:text-white">Home</a>
          <a href="/services" className="block hover:text-white">Services</a>
          <a href="about" className="block hover:text-white">About Us</a>

          {/* Contact Us Button inside Mobile Menu */}
          <button className="bg-[#9EFF00] text-black px-4 py-2 rounded hover:bg-green-500 block w-[200px] mt-4">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

