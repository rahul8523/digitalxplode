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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18249413643"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-18249413643');`}
        </script>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
