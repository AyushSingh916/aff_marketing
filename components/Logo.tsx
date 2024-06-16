import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex justify-center">
        <div className="relative w-[75px] sm:w-[75px] md:w-[75px] lg:w-[115px] h-auto">
          <Image
            src="/logo.png"
            layout="intrinsic"
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
