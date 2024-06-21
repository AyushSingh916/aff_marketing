import { Metadata } from 'next';

export default function AboutLayout({ children } : { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page of the PickPicks'
};
