import '../styles/globals.css';

export const metadata = {
  title: 'NewDX Website',
  description: 'Fast Next.js landing page with sticky header and responsive hero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
