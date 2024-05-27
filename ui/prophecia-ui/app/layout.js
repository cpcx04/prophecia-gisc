import './global.css';
import React from 'react';
import MyContextProvider from './../MyContext';

export const metadata = {
  title: "PROPHECIA",
  description: "Ictus detection app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyContextProvider>
          {children}
        </MyContextProvider>
      </body>
    </html>
  );
}
