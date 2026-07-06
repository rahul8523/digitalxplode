import '../styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Digital Xplode - Leading Digital Marketing Agency for Manufacturing Companies',
  description: 'Fast Next.js landing page with sticky header and responsive hero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
