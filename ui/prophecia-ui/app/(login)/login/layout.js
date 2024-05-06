import '../../../app/global.css';

export const metadata = {
  title: "PROPHECIA",
  description: "Ictus detection app",
};

export default function RootLayout({ children }) {
  return (
    <main>{children}</main>
  );
}
