import './globals.css';
import { Metadata } from 'next';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <Analytics />
        <SpeedInsights />
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
