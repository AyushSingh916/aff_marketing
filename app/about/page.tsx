'use client';

import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 lg:px-24">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-star-jedi mb-4">About Us</h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Welcome to Affiliate Marketing Hub, your number one source for all
          things related to affiliate marketing. We&apos;re dedicated to providing
          you the very best of resources, tips, and guides, with an emphasis on
          quality content, comprehensive strategies, and actionable insights.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full max-w-4xl">
        <div className="w-full lg:w-1/2">
          <Image
            src="/Designer.jpeg"
            width={600}
            height={400}
            alt="About Us Image"
            className="rounded shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl lg:text-4xl font-star-jedi mb-4">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            Our mission is to empower individuals and businesses to achieve
            their financial goals through effective affiliate marketing
            strategies. We believe in transparency, integrity, and the power of
            knowledge sharing.
          </p>
          <h2 className="text-3xl lg:text-4xl font-star-jedi mb-4">
            Meet the Team
          </h2>
          <p className="text-lg lg:text-xl text-gray-700">
            Our team consists of experienced marketers, content creators, and
            technical experts who are passionate about helping you succeed in
            the affiliate marketing space. We are committed to bringing you the
            latest trends, tools, and techniques to stay ahead of the
            competition.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-accent text-white font-bold rounded shadow hover:bg-accent-dark bg-green-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
