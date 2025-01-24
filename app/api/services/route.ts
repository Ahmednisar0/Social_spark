import { NextResponse } from 'next/server';

type Service = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  slug: string;
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
          description:
            "Our creative team specializes in delivering visually captivating designs, impactful branding, and professional video editing that elevates your brand. We focus on crafting user-friendly interfaces and seamless user experiences across web and mobile applications, ensuring a cohesive brand presence across all platforms.",
          services: [
            {
              id: 1,
              name: 'Logo and Branding Design',
              description: "We create unique logos and branding strategies for your business.",
              longDescription:
                "Our logo and branding design service helps businesses create a distinct and professional identity. From conceptualization to execution, we ensure your branding stands out and resonates with your audience.",
              image: '/images/logo design.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Logo%20and%20Branding%20Design',
              slug: 'logo-and-branding-design',
            },
            {
              id: 2,
              name: 'Post and Product Post',
              description: "Design engaging posts and product visuals for social media.",
              longDescription:
                "We specialize in designing social media posts and product visuals that engage your audience. Whether it’s a product launch or a promotional campaign, our designs ensure maximum impact.",
              image: '/images/product podt.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Post%20and%20Product%20Post',
              slug: 'post-and-product-post',
            },
            {
              id: 3,
              name: 'Packaging Design',
              description: "Visually appealing and brand-aligned packaging designs.",
              longDescription:
                "Our packaging design service ensures your products stand out on shelves and communicate your brand message effectively. We focus on aesthetics and functionality.",
              image: '/images/product packaging.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Packaging%20Design',
              slug: 'packaging-design',
            },
            {
              id: 4,
              name: 'Web/App Designing',
              description: "User-friendly web and app designs focused on functionality and aesthetics.",
              longDescription:
                "Our web and app design service delivers user-friendly interfaces and seamless user experiences. From wireframing to design, we ensure your digital presence is engaging and functional.",
              image: '/images/web_app design.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Web%2FApp%20Designing',
              slug: 'web-app-designing',
            },
            {
              id: 5,
              name: 'Video Editing',
              description: "Professional video editing services to create high-quality, engaging videos.",
              longDescription:
                "Our professional video editing services transform your raw footage into high-quality, engaging videos. Perfect for social media, advertisements, and more.",
              image: '/images/video editing.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Video%20Editing',
              slug: 'video-editing',
            },
            {
              id: 6,
              name: 'UI/UX Design',
              description: "Create intuitive, user-friendly interfaces and smooth user experiences.",
              longDescription:
                "Our UI/UX design services focus on creating intuitive, user-friendly interfaces and seamless experiences. We prioritize usability, accessibility, and aesthetics for your web or mobile applications.",
              image: '/images/Uxui.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20UI%2FUX%20Design',
              slug: 'ui-ux-design',
            },
          ],
        },
        {
          title: 'Digital Marketing',
          description:
            "We help businesses enhance their online presence and reach their target audience through proven digital marketing strategies. From improving search engine rankings with SEO to running effective ad campaigns with SEM, we ensure that your digital marketing efforts drive measurable results.",
          services: [
            {
              id: 1,
              name: 'SEO (Search Engine Optimization)',
              description:
                "Boost your website's visibility and traffic with our effective SEO strategies.",
              longDescription:
                "Our SEO services focus on optimizing your website for search engines to increase visibility, drive organic traffic, and improve rankings on SERPs.",
              image: '/images/seo.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20SEO%20%28Search%20Engine%20Optimization%29',
              slug: 'seo-search-engine-optimization',
            },
            {
              id: 2,
              name: 'Email Marketing',
              description: "Design and execute personalized email campaigns that drive engagement.",
              longDescription:
                "Our email marketing service helps you craft personalized campaigns that boost customer engagement, improve conversion rates, and foster brand loyalty.",
              image: '/images/Email marketing.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Email%20Marketing',
              slug: 'email-marketing',
            },
            {
              id: 3,
              name: 'Social Media Account Management',
              description:
                "We handle your social media accounts to ensure consistent posting and audience engagement.",
              longDescription:
                "Our social media management service ensures your profiles stay active, engaging, and aligned with your brand identity, allowing you to focus on your business.",
              image: '/images/smam.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Social%20Media%20Account%20Management',
              slug: 'social-media-account-management',
            },
            {
              id: 4,
              name: 'Social Media Marketing',
              description: "Run targeted social media campaigns to increase brand awareness.",
              longDescription:
                "Our social media marketing services help you create impactful campaigns that drive brand awareness, engagement, and lead generation across major platforms.",
              image: '/images/smm.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Social%20Media%20Marketing',
              slug: 'social-media-marketing',
            },
            {
              id: 5,
              name: 'Search Engine Marketing (SEM)',
              description: "Manage your Google Ads campaigns for increased visibility and ROI.",
              longDescription:
                "Our SEM services focus on creating and managing Google Ads campaigns that maximize your visibility and ROI through targeted advertising.",
              image: '/images/sem.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Search%20Engine%20Marketing%20%28SEM%29',
              slug: 'search-engine-marketing-sem',
            },
            {
              id: 6,
              name: 'Display Advertising',
              description: "Create eye-catching banner ads for websites and apps.",
              longDescription:
                "Our display advertising service focuses on designing and placing banner ads that grab attention and drive clicks. Perfect for increasing visibility and engagement.",
              image: '/images/Display ads.png',
              link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Display%20Advertising',
              slug: 'display-advertising',
            },
    
          ],
        },
        {
            "title": "Web Development",
            "description": "Our web development services bring your digital ideas to life. From converting Figma designs into responsive code to building robust full-stack web applications, we deliver custom solutions that ensure your website or web application performs flawlessly, providing an excellent user experience across all devices.",
            "services": [
              {
                "id": 1,
                "name": "Figma Design to Code",
                "description": "Convert Figma designs into fully functional, responsive code.",
                "longDescription": "We transform Figma designs into responsive and functional code, ensuring that the final product reflects your vision while maintaining top-tier performance.",
                "image": "/images/figma to design.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Figma%20Design%20to%20Code",
                "slug": "figma-design-to-code"
              },
              {
                "id": 2,
                "name": "Front-End Development",
                "description": "Responsive and interactive front-end web development.",
                "longDescription": "Our front-end development services create dynamic and responsive user interfaces that deliver an excellent experience across all devices and browsers.",
                "image": "/images/Front-end developer.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Front-End%20Development",
                "slug": "front-end-development"
              },
              {
                "id": 3,
                "name": "Back-End Development",
                "description": "Build robust back-end systems that power seamless front-end functionality.",
                "longDescription": "We create secure, scalable, and efficient back-end systems that seamlessly integrate with your front-end to provide a smooth user experience.",
                "image": "/images/Back-end-developer.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Back-End%20Development",
                "slug": "back-end-development"
              },
              {
                "id": 4,
                "name": "Full-Stack Development",
                "description": "Complete web applications built with front-end and back-end expertise.",
                "longDescription": "Our full-stack development services offer a comprehensive approach to web development, handling both the front-end and back-end to create cohesive applications.",
                "image": "/images/Full-stack.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Full-Stack%20Development",
                "slug": "full-stack-development"
              },
              {
                "id": 5,
                "name": "E-Commerce/Online Store Development",
                "description": "Develop feature-rich e-commerce platforms with seamless payment integration.",
                "longDescription": "We specialize in creating e-commerce websites that provide a smooth shopping experience with secure payment gateways and easy navigation.",
                "image": "/images/E-comerce.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20E-Commerce%2FOnline%20Store%20Development",
                "slug": "e-commerce-online-store-development"
              },
              {
                "id": 6,
                "name": "Custom Web Development",
                "description": "Tailored web development solutions for your business needs.",
                "longDescription": "Our custom web development services provide tailored solutions that cater specifically to your business goals and requirements.",
                "image": "/images/Custom web.png",
                "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20E-Commerce%2FOnline%20Store%20Development",
                "slug": "Custom-Web-Development",
            }
            ]
          }
          

  ];

  return NextResponse.json(servicesData);
};
export  const servicesData: ServiceCategory[] = [
    {
      title: 'Graphic Designing, Video Editing & UI/UX',
      description:
        "Our creative team specializes in delivering visually captivating designs, impactful branding, and professional video editing that elevates your brand. We focus on crafting user-friendly interfaces and seamless user experiences across web and mobile applications, ensuring a cohesive brand presence across all platforms.",
      services: [
        {
          id: 1,
          name: 'Logo and Branding Design',
          description: "We create unique logos and branding strategies for your business.",
          longDescription:
            "Our logo and branding design service helps businesses create a distinct and professional identity. From conceptualization to execution, we ensure your branding stands out and resonates with your audience.",
          image: '/images/logo design.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Logo%20and%20Branding%20Design',
          slug: 'logo-and-branding-design',
        },
        {
          id: 2,
          name: 'Post and Product Post',
          description: "Design engaging posts and product visuals for social media.",
          longDescription:
            "We specialize in designing social media posts and product visuals that engage your audience. Whether it’s a product launch or a promotional campaign, our designs ensure maximum impact.",
          image: '/images/product podt.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Post%20and%20Product%20Post',
          slug: 'post-and-product-post',
        },
        {
          id: 3,
          name: 'Packaging Design',
          description: "Visually appealing and brand-aligned packaging designs.",
          longDescription:
            "Our packaging design service ensures your products stand out on shelves and communicate your brand message effectively. We focus on aesthetics and functionality.",
          image: '/images/product packaging.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Packaging%20Design',
          slug: 'packaging-design',
        },
        {
          id: 4,
          name: 'Web/App Designing',
          description: "User-friendly web and app designs focused on functionality and aesthetics.",
          longDescription:
            "Our web and app design service delivers user-friendly interfaces and seamless user experiences. From wireframing to design, we ensure your digital presence is engaging and functional.",
          image: '/images/web_app design.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Web%2FApp%20Designing',
          slug: 'web-app-designing',
        },
        {
          id: 5,
          name: 'Video Editing',
          description: "Professional video editing services to create high-quality, engaging videos.",
          longDescription:
            "Our professional video editing services transform your raw footage into high-quality, engaging videos. Perfect for social media, advertisements, and more.",
          image: '/images/video editing.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Video%20Editing',
          slug: 'video-editing',
        },
        {
          id: 6,
          name: 'UI/UX Design',
          description: "Create intuitive, user-friendly interfaces and smooth user experiences.",
          longDescription:
            "Our UI/UX design services focus on creating intuitive, user-friendly interfaces and seamless experiences. We prioritize usability, accessibility, and aesthetics for your web or mobile applications.",
          image: '/images/Uxui.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20UI%2FUX%20Design',
          slug: 'ui-ux-design',
        },
      ],
    },
    {
      title: 'Digital Marketing',
      description:
        "We help businesses enhance their online presence and reach their target audience through proven digital marketing strategies. From improving search engine rankings with SEO to running effective ad campaigns with SEM, we ensure that your digital marketing efforts drive measurable results.",
      services: [
        {
          id: 1,
          name: 'SEO (Search Engine Optimization)',
          description:
            "Boost your website's visibility and traffic with our effective SEO strategies.",
          longDescription:
            "Our SEO services focus on optimizing your website for search engines to increase visibility, drive organic traffic, and improve rankings on SERPs.",
          image: '/images/seo.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20SEO%20%28Search%20Engine%20Optimization%29',
          slug: 'seo-search-engine-optimization',
        },
        {
          id: 2,
          name: 'Email Marketing',
          description: "Design and execute personalized email campaigns that drive engagement.",
          longDescription:
            "Our email marketing service helps you craft personalized campaigns that boost customer engagement, improve conversion rates, and foster brand loyalty.",
          image: '/images/Email marketing.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Email%20Marketing',
          slug: 'email-marketing',
        },
        {
          id: 3,
          name: 'Social Media Account Management',
          description:
            "We handle your social media accounts to ensure consistent posting and audience engagement.",
          longDescription:
            "Our social media management service ensures your profiles stay active, engaging, and aligned with your brand identity, allowing you to focus on your business.",
          image: '/images/smam.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Social%20Media%20Account%20Management',
          slug: 'social-media-account-management',
        },
        {
          id: 4,
          name: 'Social Media Marketing',
          description: "Run targeted social media campaigns to increase brand awareness.",
          longDescription:
            "Our social media marketing services help you create impactful campaigns that drive brand awareness, engagement, and lead generation across major platforms.",
          image: '/images/smm.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Social%20Media%20Marketing',
          slug: 'social-media-marketing',
        },
        {
          id: 5,
          name: 'Search Engine Marketing (SEM)',
          description: "Manage your Google Ads campaigns for increased visibility and ROI.",
          longDescription:
            "Our SEM services focus on creating and managing Google Ads campaigns that maximize your visibility and ROI through targeted advertising.",
          image: '/images/sem.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Search%20Engine%20Marketing%20%28SEM%29',
          slug: 'search-engine-marketing-sem',
        },
        {
          id: 6,
          name: 'Display Advertising',
          description: "Create eye-catching banner ads for websites and apps.",
          longDescription:
            "Our display advertising service focuses on designing and placing banner ads that grab attention and drive clicks. Perfect for increasing visibility and engagement.",
          image: '/images/Display ads.png',
          link: 'https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Display%20Advertising',
          slug: 'display-advertising',
        },

      ],
    },
    {
        "title": "Web Development",
        "description": "Our web development services bring your digital ideas to life. From converting Figma designs into responsive code to building robust full-stack web applications, we deliver custom solutions that ensure your website or web application performs flawlessly, providing an excellent user experience across all devices.",
        "services": [
          {
            "id": 1,
            "name": "Figma Design to Code",
            "description": "Convert Figma designs into fully functional, responsive code.",
            "longDescription": "We transform Figma designs into responsive and functional code, ensuring that the final product reflects your vision while maintaining top-tier performance.",
            "image": "/images/figma to design.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Figma%20Design%20to%20Code",
            "slug": "figma-design-to-code"
          },
          {
            "id": 2,
            "name": "Front-End Development",
            "description": "Responsive and interactive front-end web development.",
            "longDescription": "Our front-end development services create dynamic and responsive user interfaces that deliver an excellent experience across all devices and browsers.",
            "image": "/images/Front-end developer.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Front-End%20Development",
            "slug": "front-end-development"
          },
          {
            "id": 3,
            "name": "Back-End Development",
            "description": "Build robust back-end systems that power seamless front-end functionality.",
            "longDescription": "We create secure, scalable, and efficient back-end systems that seamlessly integrate with your front-end to provide a smooth user experience.",
            "image": "/images/Back-end-developer.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Back-End%20Development",
            "slug": "back-end-development"
          },
          {
            "id": 4,
            "name": "Full-Stack Development",
            "description": "Complete web applications built with front-end and back-end expertise.",
            "longDescription": "Our full-stack development services offer a comprehensive approach to web development, handling both the front-end and back-end to create cohesive applications.",
            "image": "/images/Full-stack.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20Full-Stack%20Development",
            "slug": "full-stack-development"
          },
          {
            "id": 5,
            "name": "E-Commerce/Online Store Development",
            "description": "Develop feature-rich e-commerce platforms with seamless payment integration.",
            "longDescription": "We specialize in creating e-commerce websites that provide a smooth shopping experience with secure payment gateways and easy navigation.",
            "image": "/images/E-comerce.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20E-Commerce%2FOnline%20Store%20Development",
            "slug": "e-commerce-online-store-development"
          },
          {
            "id": 6,
            "name": "Custom Web Development",
            "description": "Tailored web development solutions for your business needs.",
            "longDescription": "Our custom web development services provide tailored solutions that cater specifically to your business goals and requirements.",
            "image": "/images/Custom web.png",
            "link": "https://wa.me/+447845009381?text=hey%20i%20want%20to%20know%20more%20about%20E-Commerce%2FOnline%20Store%20Development",
            "slug": "Custom-Web-Development",
        }
        ]
      }
      

];