// BedFrameCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BedFrameCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-1">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/Bed.png" alt="Bed Frame" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rank 2</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Zinus Moiz Wood Platform Bed Frame (standard)</h1>
          <p className="mt-2 text-gray-500">A stylish, not-too-heavy platform bed</p>
          <p className="mt-2 text-gray-500">This simple, stylish platform bed frame is the lightest of any model we recommend, so it&apos;s easier for one person to assemble and move on their own, but we&apos;ve found that its stock can be unreliable.</p>
          <div className="mt-4 flex justify-between">
            <Link href="https://amazon.com" className="text-blue-500 hover:underline">$38 from Amazon</Link>
            <Link href="https://flipkart.com" className="text-blue-500 hover:underline">$39 from Flipkart</Link>
          </div>
          <div className="mt-4 px-2 py-1 bg-blue-100 text-blue-500 rounded-full inline-block">Top Pick</div>
        </div>
      </div>
    </div>
  );
};

export default BedFrameCard;
