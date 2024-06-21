import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/productsData/ElectronicAppliances.json';
import Card from '@/components/ComparisionCard';

interface ProductPageProps {
  params: { slug: string; sublink: string };
}

export function generateStaticParams(): { slug: string; sublink: string }[] {
  return data.map((p) => ({ slug: p.slug[1], sublink: p.slug[2] }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug, sublink } = params;
  console.log("Params:", params);
  const product = data.find((item) => item.slug[2] === sublink);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex justify-between items-center text-gray-600 mb-6">
            <p>Updated {product.updatedDate}</p>
            <Link href={product.researchLink}>
              <p className="flex items-center gap-2 text-blue-600 hover:underline">
                {/* <FaRegCircleUser size={20} /> */}
                {/* <span>Research By {product.authors}</span> */}
              </p>
            </Link>
          </div>
          <p className="text-gray-800 whitespace-pre-line leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Why You Should Trust Us</h2>
        <p className="text-gray-800 mb-2">{product.whyTrustUs.content}</p>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          {product.whyTrustUs.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="text-gray-800 mb-4">{product.whyTrustUs.conclusion}</p>
        <div className="text-gray-800">
          <h3 className="text-xl font-bold mb-2">{product.researchProcess.title}</h3>
          {product.researchProcess.content.map((paragraph, index) => (
            <p key={index} className="mb-2">{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{product.comparisonSection.title}</h2>
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={600}
          className="rounded-md mb-4"
        />
        <Card
          imageSrc={product.topPick.image}
          altText={product.topPick.title}
          rank={product.topPick.rank}
          title={product.topPick.title}
          description={product.topPick.description}
          metrics={product.topPick.metrics.map((metric) => ({
            name: metric.name,
            rating: metric.rating,
          }))}
          priceLinks={product.topPick.purchaseLinks.map((link) => ({
            store: link.store,
            price: link.price,
            link: link.link,
          }))}
        />
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mt-6">
          <div className="mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full">Top Pick</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Who it&apos;s for:</h3>
          <p className="text-gray-700 mb-6">{product.comparisonSection.content}</p>
          <ul className="list-disc list-inside space-y-2">
            {product.comparisonSection.keyPoints.map((point, index) => (
              <li key={index} className="font-bold">{point}</li>
            ))}
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
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">{product.competitionSection.title}</h2>
        <div className="space-y-4">
          {product.competitionSection.competitors.map((competitor, index) => (
            <Card
              key={index}
              imageSrc={competitor.image}
              altText={competitor.title}
              rank={competitor.rank}
              title={competitor.title}
              description={competitor.description}
              metrics={competitor.metrics.map((metric) => ({
                name: metric.name,
                rating: metric.rating,
              }))}
              priceLinks={competitor.purchaseLinks.map((link) => ({
                store: link.store,
                price: link.price,
                link: link.link,
              }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
