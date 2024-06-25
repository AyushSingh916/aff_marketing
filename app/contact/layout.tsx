import { Metadata } from 'next';

export default function ContactLayout({ children } : { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'This is the contact page of the PickPicks'
};
