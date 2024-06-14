import React from 'react';
import Image from 'next/image';
import './globals.css';
import latestUpdates from '@/data/latest_update.json';
import deals from '@/data/daily_deals.json';
import Horizontal from '@/components/Horizontal';
import Vertical from '@/components/Vertical';
import data from '@/data/home_products.json';
import { Data, LatestUpdate, MainContent, Article } from '@/lib/types';


const Home = () => {
  // Data for Horizontal and Vertical components
  const { sleepMain, sleepArticles, electronicsMain, electronicsArticles } = data as Data;

  return (
    <main className="flex flex-col items-center py-8 min-h-screen" style={{ backgroundColor: '#E6E6E6' }}>
      <section className="w-full max-w-7xl px-4" style={{ width: '90%' }}>
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Daily Deals Section */}
          <div className="w-full lg:w-1/4 p-4 rounded-lg shadow-lg" style={{ background: '#D9D9D91A', boxShadow: `-15px 15px 20px rgba(0, 0, 0, 0.1), -10px 10px 14px rgba(0, 0, 0, 0.08), 15px -15px 20px rgba(255, 255, 255, 0.8) inset, 10px -10px 14px rgba(255, 255, 255, 0.6) inset` }}>
            <h2 className="text-2xl font-bold mb-4">DAILY DEALS</h2>
            <p className="text-sm text-gray-600 mb-6">PRICE DROPS ON PRODUCTS WE LOVE</p>
            {deals.map((deal, index) => (
              <div key={index} className="mb-8">
                <Image
                  src="/main.jpg"
                  alt={deal.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto object-cover mb-2"
                />
                <h3 className="text-xl font-semibold">{deal.name}</h3>
                <p className="text-gray-500 text-sm">
                  {deal.originalPrice} <span className="text-green-500 font-bold">{deal.discountedPrice}</span>
                </p>
                <p className="text-gray-500 text-sm">{deal.discountPercentage}</p>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="w-full lg:w-1/2 p-4 rounded-lg shadow-lg" style={{ background: '#D9D9D91A', boxShadow: `-15px 15px 20px rgba(0, 0, 0, 0.1), -10px 10px 14px rgba(0, 0, 0, 0.08), 15px -15px 20px rgba(255, 255, 255, 0.8) inset, 10px -10px 14px rgba(255, 255, 255, 0.6) inset` }}>
            <Image
              src="/main.jpg"
              alt="Main Content"
              width={600}
              height={400}
              className="w-full h-auto object-cover mb-4"
            />
            <h2 className="text-3xl font-bold">Lorem Ipsum</h2>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>

          {/* Latest Updates Section */}
          <div className="w-full lg:w-1/4 p-4 rounded-lg shadow-lg" style={{ background: '#D9D9D91A', boxShadow: `-15px 15px 20px rgba(0, 0, 0, 0.1), -10px 10px 14px rgba(0, 0, 0, 0.08), 15px -15px 20px rgba(255, 255, 255, 0.8) inset, 10px -10px 14px rgba(255, 255, 255, 0.6) inset` }}>
            <h2 className="text-2xl font-bold mb-4">LATEST UPDATES</h2>
            <p className="text-sm text-gray-600 mb-6">TOP REVIEWS AND DEALS</p>
            {latestUpdates.map((update, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold">{update.title}</h3>
                <p className="text-gray-500 text-sm">{update.link}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4">
        <Horizontal
          mainImage={sleepMain}
          mainTitle={sleepMain.title}
          mainDescription={sleepMain.description}
          articles={sleepArticles}
        />
      </section>

      <section className="w-full max-w-7xl px-4">
        <Vertical
          mainImage={electronicsMain}
          mainTitle={electronicsMain.title}
          mainDescription={electronicsMain.description}
          articles={electronicsArticles}
        />
      </section>

      <section className="w-full max-w-7xl px-4">
        <Horizontal
          mainImage={sleepMain}
          mainTitle={sleepMain.title}
          mainDescription={sleepMain.description}
          articles={sleepArticles}
        />
      </section>

      <section className="w-full max-w-7xl px-4">
        <Vertical
          mainImage={electronicsMain}
          mainTitle={electronicsMain.title}
          mainDescription={electronicsMain.description}
          articles={electronicsArticles}
        />
      </section>
    </main>
  );
};

export default Home;
