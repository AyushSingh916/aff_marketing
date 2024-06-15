import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex justify-center">
        <div className="relative w-[100px] sm:w-[100px] md:w-[100px] lg:w-[150px] h-auto">
          <Image
            src="/logo.png"
            layout="responsive"
            width={150}
            height={24}
            alt="Affiliate Marketing Logo"
            priority
            className="w-full h-auto"
          />
        </div>
      </Link>
    </>
  );
};


export default Logo;