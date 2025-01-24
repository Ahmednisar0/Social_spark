// /app/service/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { servicesData } from '../../api/services/route';// Import static data
import Footer from '@/components/Footer';

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Flatten services array to find the matching service by slug
  const service = servicesData
    .flatMap((category) => category.services)
    .find((s) => s.slug === params.slug);

  // Handle 404 if no matching service is found
  if (!service) {
    notFound();
  }

  return (
    <div
      className=" w-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,0,0.4) 10%, rgba(0,0,0,0) 40%)',
      }}
    >

      <Navbar />
      <div className="container lg:ml-[100px] mx-auto p-6 text-white">
        <div className="flex flex-col lg:flex-row items-center mb-6 mt-4">
          <img
            src={service.image}
            alt={service.name}
            className="w-full lg:w-[500px] h-auto object-cover mb-4 lg:mb-0 lg:mr-6"
          />
          <div className="w-full lg:mt-[-150px] lg:w-1/2">
            <h1 className="text-4xl font-bold mb-10">{service.name}</h1>
            <p className="text-lg leading-relaxed mb-10">{service.longDescription}</p>
            <div className="text-sm lg:w-[500px] text-gray-400 mb-2">
  By clicking this, you will be redirected to our official WhatsApp business account, where you can get all the details about the services you want.
</div>
<a 
  href={service.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-[#9EFF00] text-black font-semibold rounded-lg shadow-md hover:bg-green-600"
>
  Contact Us About This Service
</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
