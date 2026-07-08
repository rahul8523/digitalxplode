import '../styles/globals.css';
import Footer from '@/components/Footer';
import Script from "next/script";
export const metadata = {
  title: 'Digital Xplode - Leading Digital Marketing Agency for Manufacturing Companies',
  description: 'Fast Next.js landing page with sticky header and responsive hero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18249413643"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18249413643');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
