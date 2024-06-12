import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  {
    name: 'Smartphone XYZ',
    description: 'The latest smartphone with cutting-edge technology.',
    href: '/tech/mobile/smartphones',
    image: 'https://via.placeholder.com/300x200.png?text=Smartphone+XYZ',
  },
  {
    name: 'Modern Sofa',
    description: 'Comfortable and stylish sofa for your living room.',
    href: '/home-garden/furniture/living-room',
    image: 'https://via.placeholder.com/300x200.png?text=Modern+Sofa',
  },
  {
    name: 'Fitness Tracker',
    description: 'Track your fitness goals with this advanced tracker.',
    href: '/health-lifestyle/fitness/wearables',
    image: 'https://via.placeholder.com/300x200.png?text=Fitness+Tracker',
  },
];

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center py-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Affiliate Market</h1>
          <p className="text-xl">Your one-stop shop for the best deals and reviews on top products.</p>
        </section>

        <section className="w-full max-w-7xl px-4">
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="border rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-gray-700">{product.description}</p>
                  <Link href={product.href} className="text-blue-500 hover:underline mt-2 block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-7xl px-4 mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/home-garden" className="border rounded-lg p-4 hover:bg-gray-100">
              Home & Garden
            </Link>
            <Link href="/tech" className="border rounded-lg p-4 hover:bg-gray-100">
              Tech
            </Link>
            <Link href="/health-lifestyle" className="border rounded-lg p-4 hover:bg-gray-100">
              Health & Lifestyle
            </Link>
            <Link href="/fashion" className="border rounded-lg p-4 hover:bg-gray-100">
              Fashion & Clothing
            </Link>
          </div>
        </section>

        <section className="w-full max-w-7xl px-4 mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Deals of the Day</h2>
          <Link href="/deals/todays-deals" className="bg-black text-white rounded px-4 py-2">
            Check Today's Deals
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
