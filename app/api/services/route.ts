import { NextResponse } from 'next/server';

type Service = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  services: Service[];
};

export const GET = async () => {
  const servicesData: ServiceCategory[] = [
    {
      title: 'Graphic Designing, Video Editing & UI/UX',
      description: "Our creative team specializes in delivering visually captivating designs, impactful branding, and professional video editing that elevates your brand. We focus on crafting user-friendly interfaces and seamless user experiences across web and mobile applications, ensuring a cohesive brand presence across all platforms.",
   
      services: [
        {
          id: 1,
          name: 'Logo and Branding Design',
          description: "We create unique logos and branding strategies for your business.",
          image: '/images/logo design.png',
        },
        {
          id: 2,
          name: 'Post and Product Post',
          description: "Design engaging posts and product visuals for social media.",
          image: '/images/product podt.png',
        },
        {
          id: 3,
          name: 'Packaging Design',
          description: "Visually appealing and brand-aligned packaging designs.",
          image: '/images/product packaging.png',
        },
        {
          id: 4,
          name: 'Web/App Designing',
          description: "User-friendly web and app designs focused on functionality and aesthetics.",
          image: '/images/web_app design.png',
        },
        {
          id: 5,
          name: 'Video Editing',
          description: "Professional video editing services to create high-quality, engaging videos.",
          image: '/images/video editing.png',
        },
        {
          id: 6,
          name: 'UI/UX Design',
          description: "Create intuitive, user-friendly interfaces and smooth user experiences.",
          image: '/images/Uxui.png',
        },
      ],
    },
    {
      title: 'Digital Marketing',
      description: "We help businesses enhance their online presence and reach their target audience through proven digital marketing strategies. From improving search engine rankings with SEO to running effective ad campaigns with SEM, we ensure that your digital marketing efforts drive measurable results.",
    
      services: [
        {
          id: 1,
          name: 'SEO (Search Engine Optimization)',
          description: "Boost your website's visibility and traffic with our effective SEO strategies.",
          image: '/images/seo.png',
        },
        {
          id: 2,
          name: 'Email Marketing',
          description: "Design and execute personalized email campaigns that drive engagement.",
          image: '/images/Email marketing.png',
        },
        {
          id: 3,
          name: 'Social Media Account Management',
          description: "We handle your social media accounts to ensure consistent posting and audience engagement.",
          image: '/images/smam.png',
        },
        {
          id: 4,
          name: 'Social Media Marketing',
          description: "Run targeted social media campaigns to increase brand awareness.",
          image: '/images/smm.png',
        },
        {
          id: 5,
          name: '(Search Engine Marketing)',
          description: "Manage your Google Ads campaigns for increased visibility and ROI.",
          image: '/images/sem.png',
        },
        {
          id: 6,
          name: 'Display Advertising',
          description: "Create eye-catching banner ads for websites and apps.",
          image: '/images/Display ads.png',
        },
      ],
    },
   
    {
      title: 'Web Development',
      description: "Our web development services bring your digital ideas to life. From converting Figma designs into responsive code to building robust full-stack web applications, we deliver custom solutions that ensure your website or web application performs flawlessly, providing an excellent user experience across all devices.",
    
      services: [
        {
          id: 1,
          name: 'Figma Design to Code',
          description: "Convert Figma designs into fully functional, responsive code.",
          image: '/images/figma to design.png',
        },
        {
          id: 2,
          name: 'Front-End Development',
          description: "Responsive and interactive front-end web development.",
          image: '/images/Front-end developer.png',
        },
        {
          id: 3,
          name: 'Back-End Development',
          description: "Build robust back-end systems that power seamless front-end functionality.",
          image: '/images/Back-end-developer.png',
        },
        {
          id: 4,
          name: 'Full-Stack Development',
          description: "Complete web applications built with front-end and back-end expertise.",
          image: '/images/Full-stack.png',
        },
        {
          id: 5,
          name: 'E-Commerce/Online Store Development',
          description: "Develop feature-rich e-commerce platforms with seamless payment integration.",
          image: '/images/E-comerce.png',
        },
        {
          id: 6,
          name: 'Custom Web Development',
          description: "Tailored web development solutions for your business needs.",
          image: '/images/Custom web.png',
        },
      ],
    },
  ];

  return NextResponse.json(servicesData);
};
