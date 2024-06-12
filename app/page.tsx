import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

const Home = () => {
  return (
    <main className="flex flex-col items-center py-8 min-h-screen" style={{ backgroundColor: '#E6E6E6' }} >
      <section className="w-full max-w-7xl px-4" style={{ width: '90%' }}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Daily Deals Section */}
          <div
            className="w-full lg:w-1/4 p-4 rounded-lg shadow-lg"
            style={{
              background: '#D9D9D91A',
              boxShadow: `
                -15px 15px 20px rgba(0, 0, 0, 0.1),
                -10px 10px 14px rgba(0, 0, 0, 0.08),
                15px -15px 20px rgba(255, 255, 255, 0.8) inset,
                10px -10px 14px rgba(255, 255, 255, 0.6) inset
              `,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">DAILY DEALS</h2>
            <p className="text-sm text-gray-600 mb-6">PRICE DROPS ON PRODUCTS WE LOVE</p>
            <div className="mb-8">
              <Image
                src="/laptop_stand.jpg"
                alt="Laptop Stand"
                width={100}
                height={100}
                className="w-full h-auto object-cover mb-2"
              />
              <h3 className="text-xl font-semibold">Laptop Stand</h3>
              <p className="text-gray-500 text-sm">
                $30 <span className="text-green-500 font-bold">$10</span>
              </p>
              <p className="text-gray-500 text-sm">50% off from Amazon</p>
            </div>
            {/* Add more deal items here */}
          </div>

          {/* Main Content Section */}
          <div
            className="w-full lg:w-1/2 p-4 rounded-lg shadow-lg"
            style={{
              background: '#D9D9D91A',
              boxShadow: `
                -15px 15px 20px rgba(0, 0, 0, 0.1),
                -10px 10px 14px rgba(0, 0, 0, 0.08),
                15px -15px 20px rgba(255, 255, 255, 0.8) inset,
                10px -10px 14px rgba(255, 255, 255, 0.6) inset
              `,
            }}
          >
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
          <div
            className="w-full lg:w-1/4 p-4 rounded-lg shadow-lg"
            style={{
              background: '#D9D9D91A',
              boxShadow: `
                -15px 15px 20px rgba(0, 0, 0, 0.1),
                -10px 10px 14px rgba(0, 0, 0, 0.08),
                15px -15px 20px rgba(255, 255, 255, 0.8) inset,
                10px -10px 14px rgba(255, 255, 255, 0.6) inset
              `,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">THE LATEST</h2>
            <ul>
              <li className="mb-4">
                <Link href="#" className="text-blue-500 hover:underline">
                  Top 10 Gadgets you should try in 2024
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-blue-500 hover:underline">
                  Trending Stocks you should invest in
                </Link>
              </li>
              {/* Add more latest updates */}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
