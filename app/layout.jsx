import '../styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'NewDX Website',
  description: 'Fast Next.js landing page with sticky header and responsive hero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
