import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import { FaRegCircleUser } from 'react-icons/fa6';
import BedFrameCard from '@/components/BedFrame';

interface ProductPageProps {
  params: { slug: string[] };
}

export default function ProductPage({ params }: ProductPageProps) {
  const dummyProduct = {
    slug: ['home', 'home-decor', 'carpets'],
    image: '/Bed.png',
    title: 'The Best Platform Bed Frames Under $600',
    updatedDate: 'April 29, 2024',
    researchLink: '/research-link',
    authors: 'Arsalan',
    description: `
      You don't have to spend big bucks to boost the ambience in your bedroom—the addition of a simple platform bed frame can be a game changer.
      An easy and affordable way to support your mattress, a platform bed frame will make your bed comfier to climb into and prevent mold from forming underneath.
      We spent weeks researching and testing bed frames to find our favorites—each one is easy to assemble, sturdy, stylish, and costs less than $600.
    `,
  };

  // const productSlug = params.slug.join('/');
  // const product = dummyProduct.slug.join('/') === productSlug ? dummyProduct : null;

  // if (!product) {
  //   return <div className="text-center py-10 text-gray-700">Product not found</div>;
  // }

  const product = dummyProduct;

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={600}
          className="rounded-md mb-4"
          layout="responsive"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="flex justify-between items-center text-gray-600 mb-6">
          <p>{`Updated ${product.updatedDate}`}</p>
          <Link href={product.researchLink}>
            <p className="flex items-center gap-2 text-blue-600 hover:underline">
              <FaRegCircleUser size={20} />
              <span>Research By {product.authors}</span>
            </p>
          </Link>
        </div>
        <p className="text-gray-800 whitespace-pre-line leading-relaxed">{product.description}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Why You Should Trust Us</h2>
        <p className="text-gray-800 mb-2">
          At OurCompany, we are dedicated to providing you with the best quality products that are meticulously tested and reviewed. Here’s why you should trust us:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          <li>We spend weeks researching and testing each product to ensure they meet our high standards.</li>
          <li>Our team of experts has extensive experience in the industry and understands what makes a product worth your investment.</li>
          <li>We value transparency and honesty, providing you with comprehensive reviews and insights.</li>
          <li>Your satisfaction is our priority, and we strive to offer products that improve your everyday life.</li>
        </ul>
        <p className="text-gray-800 mb-4">
          By choosing our recommended products, you are not just making a purchase; you are investing in quality, reliability, and exceptional service.
        </p>
        <div className="text-gray-800">
          <h3 className="text-xl font-bold mb-2">Our Research Process</h3>
          <p className="mb-2">
            We take pride in our thorough research process. Our team begins by identifying the needs and preferences of our audience. We then scour the market for products that meet these criteria, taking into account customer reviews, expert opinions, and industry standards.
          </p>
          <p className="mb-2">
            Once we have a list of potential products, we purchase them ourselves to ensure an unbiased review. Each product is tested in real-world conditions over a period of weeks. We assess their performance, durability, ease of use, and overall value.
          </p>
          <p className="mb-2">
            After testing, our team convenes to discuss our findings and compare notes. We consider both the pros and cons of each product and weigh them against our criteria to determine which products truly stand out.
          </p>
          <p>
            Our final recommendations are products that we believe offer the best combination of quality, performance, and value. We are committed to helping you make informed decisions and are confident that our recommendations will meet your expectations.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={600}
          className="rounded-md mb-4"
          layout="responsive"
        />
        <BedFrameCard />
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mt-6">
          <div className="mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full">
              Top Pick
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Who it's for:</h3>
          <p className="text-gray-700 mb-6">
            People who need a sturdy bed frame and DIY enthusiasts who want the
            option of personalizing the raw wood to match any style will like
            this frame.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="font-bold">Key points</li>
            <li className="font-bold">Key points</li>
            <li className="font-bold">1 more image from the site</li>
            <li className="font-bold">Key points</li>
            <li className="font-bold">Variety of Colors of the bed</li>
            <li className="font-bold">Size of the bed</li>
            <li className="font-bold">Other available info from the site</li>
            <li className="font-bold">Warranty, etc</li>
          </ul>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={600}
          className="rounded-md mb-4"
          layout="responsive"
        />
        <BedFrameCard />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">The Competition</h2>
        <div className="space-y-4">
          <BedFrameCard />
          <BedFrameCard />
          <BedFrameCard />
        </div>
      </div>
    </div>
  );
}
