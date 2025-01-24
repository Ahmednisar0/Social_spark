import './globals.css'; // Import global styles
import { Bebas_Neue, Poppins } from '@next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'social spark',
  description: 'A brief description of your site.',
  keywords: ['Next.js', 'Web Development', 'App Router'],
  author: 'Your Name',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${bebasNeue.className} ${poppins.className} bg-gray-950 text-white`}>
    
        <main>{children}</main>
      
      </body>
    </html>
  );
}
