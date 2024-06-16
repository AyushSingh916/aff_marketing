import './globals.css';
import { Metadata } from 'next';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <Header />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | BestDeal',
    default: 'BestDeal',
  },
  description: 'We do research and find the best deal for you',
};
