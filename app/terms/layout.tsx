import { Metadata } from 'next';

export default function PrivacyLayout({ children } : { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'Terms',
  description: 'This is the terms and services page of the PickPicks'
};
