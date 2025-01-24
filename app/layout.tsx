import './globals.css'; // Import global styles



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
      <body className={` bg-gray-950 text-white`}>
    
        <main>{children}</main>
      
      </body>
    </html>
  );
}
