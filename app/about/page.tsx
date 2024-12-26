import React from 'react';


import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSec from '@/components/aboutcomps/herosec';
import WhyChooseUs from '@/components/Whychoseup';

const AboutUs: React.FC = () => {
  return (<div className='bg-gray-900' >
    <Navbar />
    
    <HeroSec />
    <WhyChooseUs />
    <Footer />
    </div>
  );
};

export default AboutUs;
