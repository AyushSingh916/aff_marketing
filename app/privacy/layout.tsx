import { Metadata } from 'next';

export default function PrivacyLayout({ children } : { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'This is the privacy page of the PickPicks'
};
