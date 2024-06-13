import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import products from '@/data/products.json';

export default function ProductPage({ params }: { params: { slug: string[] } }) {
  const productSlug = params.slug.join('/');
  const product = products.find((p) => p.slug.join('/') === productSlug);


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <Link
              href={product.affiliateLink}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg inline-block font-semibold transition duration-300 hover:bg-blue-600"
            >
              Buy Now
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg mb-6">{product.review.overview}</p>
            <h2 className="text-2xl font-bold mb-4">Detailed Review</h2>
            <p className="text-lg mb-6">{product.review.details}</p>
            <div>
              <h2 className="text-2xl font-bold mb-4">Pros</h2>
              <ul className="list-disc list-inside mb-6">
                {product.review.pros.map((pro, index) => (
                  <li key={index} className="text-lg mb-2">{pro}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold mb-4">Cons</h2>
              <ul className="list-disc list-inside mb-6">
                {product.review.cons.map((con, index) => (
                  <li key={index} className="text-lg mb-2">{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            <span className="text-yellow-500">Rating:</span> {product.rating} / 5
          </p>
        </div>
      </div>
    </div>
  );
}
