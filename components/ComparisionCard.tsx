// /app/globals.css
import '@/app/globals.css';

// /components/ComparisionCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  imageSrc: string;
  altText: string;
  rank: number;
  title: string;
  description: string;
  metrics: {
    name: string;
    rating: number;
  }[];
  priceLinks: {
    store: string;
    price: string;
    link: string;
  }[];
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  rank,
  title,
  description,
  metrics,
  priceLinks,
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (v, i) => (
          <svg
            key={`full-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927C9.234 2.58 9.767 2.58 9.951 2.927l2.286 4.632 5.108.744c.4.058.56.55.271.832l-3.696 3.606.873 5.088c.068.398-.349.705-.711.516L10 15.347l-4.572 2.404c-.362.19-.78-.118-.711-.516l.873-5.088-3.696-3.606c-.289-.282-.129-.774.271-.832l5.108-.744 2.286-4.632z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            key="half"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              <clipPath id="half-star">
                <rect x="0" y="0" width="10" height="20" />
              </clipPath>
            </defs>
            <path
              clipPath="url(#half-star)"
              d="M9.049 2.927C9.234 2.58 9.767 2.58 9.951 2.927l2.286 4.632 5.108.744c.4.058.56.55.271.832l-3.696 3.606.873 5.088c.068.398-.349.705-.711.516L10 15.347l-4.572 2.404c-.362.19-.78-.118-.711-.516l.873-5.088-3.696-3.606c-.289-.282-.129-.774.271-.832l5.108-.744 2.286-4.632z"
            />
          </svg>
        )}
        {Array.from({ length: emptyStars }, (v, i) => (
          <svg
            key={`empty-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927C9.234 2.58 9.767 2.58 9.951 2.927l2.286 4.632 5.108.744c.4.058.56.55.271.832l-3.696 3.606.873 5.088c.068.398-.349.705-.711.516L10 15.347l-4.572 2.404c-.362.19-.78-.118-.711-.516l.873-5.088-3.696-3.606c-.289-.282-.129-.774.271-.832l5.108-.744 2.286-4.632z" />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative w-full h-48 md:h-full md:w-48">
            <Image
              src={imageSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Rank {rank}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4">
            <h2 className="text-md font-semibold text-gray-700">Product Metrics</h2>
            <ul className="mt-2 space-y-2">
              {metrics.map((metric, index) => (
                <li key={index} className="flex justify-between text-gray-600">
                  <span>{metric.name}:</span>
                  <span className="flex">{renderStars(metric.rating)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex justify-between">
            {priceLinks.map((link, index) => (
              <Link key={index} href={link.link}>
                <p className="text-blue-500 hover:underline">{link.price}</p>
              </Link>
            ))}
          </div>
          {rank === 1 && (
            <div className="mt-4 px-3 py-1 bg-blue-100 text-blue-500 rounded-full inline-block">
              Top Pick
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;