import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import { Metadata } from 'next';

import Link from 'next/link';

function XIcon({ size, className }: { size: string, className?: string } = { size: '2rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex flex-col lg:items-center bg-black text-white text-xs w-full h-fit px-8 py-4 gap-8">
      <div className='w-full flex flex-col lg:flex-row gap-4 items-start justify-between max-w-7xl'>
        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 half-underline">Follow Us</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/company/peak-picks/?viewAsMember=true"
              className="group flex items-center justify-center gap-2 hover:bg-blue-800 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><LinkedinIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>LinkedIn</div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561221100641"
              className="group flex items-center justify-center gap-2 hover:bg-blue-600 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><FacebookIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Facebook</div>
            </a>
            <a
              href="https://x.com/PeakPicks1"
              className="group flex items-center justify-center gap-2 hover:bg-black rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><XIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Twitter</div>
            </a>
            <a
              href="https://www.instagram.com/peakpicksinsta"
              className="group flex items-center justify-center gap-2 hover:bg-purple-600 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><InstagramIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Instagram</div>
            </a>
            {/* <a
              href="https://www.youtube.com"
              className="group flex items-center justify-center gap-2 hover:bg-red-600 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><YoutubeIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>YouTube</div>
            </a> */}
          </div>
        </div>
        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 mb-2 half-underline">Quick Links</h2>
          <Link className='hover:underline' href="/about">About Us</Link>
          <Link className='hover:underline' href="/contact">Contact Us</Link>
          <Link className='hover:underline' href="/privacy">Privacy Policy</Link>
          <Link className='hover:underline' href="/terms">Terms of Service</Link>
        </div>
        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 mb-2 half-underline">Subscribe</h2>
          <p>Sign up to get the latest updates and offers.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-sm"
            />
            <button type="submit" className="bg-blue-600 p-2 rounded-sm text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex justify-between lg:justify-center w-full max-w-7xl'>
        <div>Copyright &copy; 2024, All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;

export const metadata: Metadata = {
  title: {
    template: '%s | BestDeal',
    default: 'BestDeal',
  },
  description: 'We do research and find the best deal for you',
};