'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import latestUpdates from '@/data/latest_update.json';
import deals from '@/data/daily_deals.json';
import Horizontal from '@/components/Horizontal';
import Vertical from '@/components/Vertical';
import data from '@/data/home_products.json';
import { CategoryData } from '@/lib/types';

const Home: React.FC = () => {

  const renderSection = (data: CategoryData, Component: React.FC<any>, sectionId: string) => (
    <section id={sectionId} className="w-full max-w-7xl px-4 mb-12">
      <Component
        mainImage={data.main}
        mainTitle={data.main.title}
        mainDescription={data.main.description}
        articles={data.articles}
      />
    </section>
  );

  return (
    <main
      className="flex flex-col items-center py-8 min-h-screen"
      style={{ backgroundColor: '#F5F5F7' }}
    >
      <section className="w-full max-w-7xl px-4" style={{ width: '90%' }}>
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Daily Deals Section */}
          <div
            className="w-full lg:w-1/4 p-6 rounded-xl shadow-lg"
            style={{
              background: '#FFFFFF',
              boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Daily Deals</h2>
            <p className="text-sm text-gray-600 mb-6">
              Price drops on products we love
            </p>
            {deals.map((deal, index) => (
              <div key={index} className="mb-8">
                <Link href={deal.link}>
                  <Image
                    src={deal.image}
                    alt={deal.alt}
                    width={100}
                    height={100}
                    className="w-full h-auto object-cover mb-2 rounded-lg"
                  />
                </Link>
                <h3 className="text-xl font-semibold">{deal.name}</h3>
                <p className="text-gray-500 text-sm">
                  <span className="line-through">{deal.originalPrice}</span>{' '}
                  <span className="text-green-500 font-bold">
                    {deal.discountedPrice}
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  {deal.discountPercentage} off
                </p>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div
            className="w-full lg:w-1/2 p-6 rounded-xl shadow-lg"
            style={{
              background: '#FFFFFF',
              boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
            }}
          >
            <Image
              src="https://m.media-amazon.com/images/I/81Sx6JZKBoL._SX679_.jpg"
              alt="Main Content"
              width={600}
              height={400}
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4">Best Sofa for your Living Room</h2>
            <p className="text-gray-600">
              The Coirfit 3 Seater Folding Sofa Cum Bed is a versatile and practical addition to any living room. Featuring a durable jute fabric cover that is washable, this sofa cum bed is designed for convenience and comfort. It includes free cushions and offers a seating capacity of three, making it ideal for both seating and sleeping arrangements.
            </p>
            <p className="text-gray-600">
              <strong>Details:</strong> Brand: Coirfit. Colour: Brown. Material: Jute Fabric. Upholstery Fabric Type: Jute. Size: 5x6 Feet. Product Dimensions: 76.2D x 121.9W x 71.1H Centimeters. Item Weight: 26 kg. Shape: Rectangular. Style: L Shaped. Assembly Required: No. Special Features: L Shaped, Armless. Room Type: Living Room. Type: Sofa Bed.
            </p>
          </div>

          {/* Latest Updates Section */}
          <div
            className="w-full lg:w-1/4 p-6 rounded-xl shadow-lg"
            style={{
              background: '#FFFFFF',
              boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
            {latestUpdates.map((update, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold">{update.title}</h3>
                <p className="text-gray-500 text-sm">{update.update}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {renderSection(data.home, Horizontal, '/home')}
      {/* Uncomment and use these sections as needed */}
      {/* {renderSection(data.electronicDevices, Vertical, '/electronic-devices')}
      {renderSection(data.electronicAppliances, Horizontal, '/electronic-appliances')}
      {renderSection(data.automobiles, Vertical, '/automobiles')}
      {renderSection(data.aiTools, Horizontal, '/ai-tools')}
      {renderSection(data.healthLifestyle, Vertical, '/health-lifestyle')}
      {renderSection(data.clothingBags, Horizontal, '/clothing')}
      {renderSection(data.shoes, Vertical, '/shoes')} */}
    </main>
  );
};

export default Home;
