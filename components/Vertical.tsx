import Image from 'next/image';

interface Article {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
}

interface VerticalProps {
  mainImage: {
    src: string;
    alt: string;
  };
  mainTitle: string;
  mainDescription: string;
  articles: Article[];
}

const Vertical: React.FC<VerticalProps> = ({ mainImage, mainTitle, mainDescription, articles }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
      <h2 className="text-3xl font-bold mb-2">Electronics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              src={mainImage.src}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                UPDATED {article.date}
              </p>
              <p>{mainDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vertical;
