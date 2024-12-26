 'use client'
 import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSec: React.FC = () => {
  return (
    <div
    style={{
        background: 'radial-gradient(circle at 10% 90%, rgba(34, 139, 34, 0.6) 20%, rgba(34, 139, 34, 0) 50%)',
      }}>
      <section
        className="py-16 px-4"
        
      >
        {/* Image Section */}
        <div className="flex justify-center items-center relative mb-12">
          <Image
            src="/images/Text Container.png"
            alt="Text Container"
            width={1200}
            height={500}
            className="w-full h-[200px] lg:h-[300px] rounded-lg"
          />
          {/* Text Overlay */}
          <div className="absolute text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-sm lg:text-sm text-gray-300 max-w-[700px] mx-auto">
              Welcome to Social Spark, where creativity and expertise come together to deliver innovative digital solutions. We’re passionate about helping your brand thrive in the ever-changing digital landscape.
            </p>
          </div>
        </div>
      </section>

      <motion.section
        className="flex items-center flex-col lg:flex-row h-[800px] mt-[-100px] lg:mt-0 lg:h-screen justify-between py-16 px-4 bg-cover bg-center"
        style={{
          background: 'radial-gradient(circle at 10% 90%, rgba(34, 139, 34, 0.6) 20%, rgba(34, 139, 34, 0) 50%)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Side Content */}
        <motion.div
          className="text-white max-w-lg lg:ml-[100px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold lg:text-start text-center mb-4">About Us</h1>
          <p className="text-center text-sm lg:text-start lg:text-[17px] text-gray-300 mb-8">
            Social Spark is a dynamic digital agency committed to crafting exceptional digital experiences. Specializing in design, web development, and digital marketing, we help businesses grow and succeed in the fast-paced digital landscape. At Social Spark, we adopt a collaborative, client-centric approach, ensuring every project combines creative vision with technical expertise. Our structured process blends industry best practices with innovative thinking, delivering tailored solutions that drive results and elevate your brand. We’re here to turn your digital goals into reality, providing end-to-end services that make a lasting impact.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="lg:w-1/2 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/aboutus.jpg"
            alt="About Us"
            className="rounded-lg w-[350px] lg:w-[500px] lg:h-[500px] h-[334px]"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSec;
