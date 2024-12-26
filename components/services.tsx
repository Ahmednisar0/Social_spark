'use client'
import React from 'react';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaFilm, FaCamera, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceItemProps {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,0,0.4) 10%, rgba(0,0,0,0) 40%)',
      }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        The Service We Provide <br /> For You
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-8">
        
        {/* Web Development */}
        <ServiceItem
          icon={<FaLaptopCode size={35} />}
          bgColor="bg-red-500/30"
          iconColor="text-red-500"
          title="Web Development"
          description="Create a platform with the best and coolest quality from us."
        />
        
        {/* Digital Marketing */}
        <ServiceItem
          icon={<FaBullhorn size={35} />}
          bgColor="bg-yellow-500/30"
          iconColor="text-yellow-500"
          title="Digital Marketing"
          description="Create a powerful digital presence with the best and most innovative strategies from us."
        />
        
        {/* UX/UI Design */}
        <ServiceItem
          icon={<FaPaintBrush size={35} />}
          bgColor="bg-purple-500/30"
          iconColor="text-purple-500"
          title="UX/UI Design"
          description="We provide UI/UX Design services, and of course with the best quality."
        />

        {/* Video Editing */}
        <ServiceItem
          icon={<FaFilm size={35} />}
          bgColor="bg-blue-500/30"
          iconColor="text-blue-500"
          title="Video Editing"
          description="Create stunning visuals with the best and most creative video editing services from us."
        />

        {/* Graphic Design */}
        <ServiceItem
          icon={<FaCamera size={35} />}
          bgColor="bg-green-500/30"
          iconColor="text-green-500"
          title="Graphic Design"
          description="We provide Graphic Design services, with the best designers."
        />

        {/* Social Media Account Management */}
        <ServiceItem
          icon={<FaUsers size={35} />}
          bgColor="bg-blue-400/30"
          iconColor="text-blue-400"
          title="Social Media Account Management"
          description="Manage your brand's online presence with the best and most effective social media strategies from us."
        />
        
      </div>
    </section>
  );
};

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, bgColor, iconColor, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center lg:ml-[100px] lg:mr-[50px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${bgColor} ${iconColor} p-3 rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
    </motion.div>
  );
};

export default Services;
