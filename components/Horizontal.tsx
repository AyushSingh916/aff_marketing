import Image from 'next/image';

interface Article {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
}

interface HorizontalProps {
  mainImage: {
    src: string;
    alt: string;
  };
  mainTitle: string;
  mainDescription: string;
  articles: Article[];
}

const Horizontal: React.FC<HorizontalProps> = ({ mainImage, mainTitle, mainDescription, articles }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">{mainTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Image src={mainImage.src} alt={mainImage.alt} width={600} height={400} />
          <h3 className="text-xl font-semibold mt-2">{mainTitle}</h3>
          <p className="text-gray-600 mt-1">{mainDescription}</p>
        </div>
        <div className="flex flex-col space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="flex space-x-4">
              <Image src={article.image.src} alt={article.image.alt} width={150} height={100} />
              <div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
