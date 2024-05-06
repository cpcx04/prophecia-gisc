import './global.css';

export const metadata = {
  title: "PROPHECIA",
  description: "Ictus detection app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
