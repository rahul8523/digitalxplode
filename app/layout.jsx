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
         {/* Google Ads Tag */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-18249413643"
      strategy="afterInteractive"
    />

    <Script id="google-ads-conversion" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];

        function gtag(){
          dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag('js', new Date());

        gtag('config', 'AW-18249413643');

        gtag('event', 'conversion', {
          send_to: 'AW-18249413643/gmHSCMHqgsEcEIvo__1D',
          value: 1.0,
          currency: 'INR'
        });
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
