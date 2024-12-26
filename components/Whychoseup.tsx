'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="py-16 px-4 relative"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,0,0.4) 10%, rgba(0,0,0,0) 40%)',
      }}
    >
      {/* Image Section */}
      <div className="flex justify-center items-center relative mb-12">
        <div className="lg:hidden mt-10">
          <Image
            src="/images/Text Container.png"
            alt="Text Container Mobile"
            width={400}
            height={1000}
            className="h-[200px] rounded-sm"
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/images/Text Container.png"
            alt="Text Container Large"
            width={1200}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute text-center text-white">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">
            Why Choose Social Spark?
          </h2>
          <p className="text-[15px] lg:text-sm text-gray-300 max-w-[700px] mx-auto">
            Experience excellence in digital craftsmanship with our team of skilled professionals
            dedicated to delivering exceptional results.
          </p>
        </div>
      </div>

      {/* Grid of Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            icon: '/images/icon.png',
            heading: 'Expertise',
            text: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
          },
          {
            icon: '/images/icon (1).png',
            heading: 'Client-Centric Approach',
            text: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.',
          },
          {
            icon: '/images/icon.png',
            heading: 'Results-Driven Solutions',
            text: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
          },
          {
            icon: '/images/icon.png',
            heading: 'Collaborative Partnership',
            text: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.',
          },
        ].map(({ icon, heading, text }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start lg:ml-[100px] mr-8 text-left p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="mb-4">
              <Image src={icon} alt={`${heading} Icon`} width={60} height={60} />
            </div>
            {/* Heading */}
            <h3 className="text-lg font-bold text-white mb-2">{heading}</h3>
            {/* Text */}
            <p className="text-gray-300 text-sm">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
