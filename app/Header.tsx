'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import DesktopMenu from '@/components/DesktopMenu';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
  const [openedItem, setOpenedItem] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenedItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className="flex flex-col w-full h-fit font-star-jedi header"
      style={{ backgroundColor: '#EEEEEE' }}
    >
      <div
        className="flex items-center justify-between h-16 lg:h-24 px-4 border-b border-black"
        style={{ boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)' }}
      >
        {/* Search Bar */}
        <SearchBar />

        {/* Logo */}
        <Logo />

        {/* About and Contact Us Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/about" className="hidden lg:block">
            About
          </Link>
          <Link
            href="/contact"
            className="text-white rounded px-4 py-2"
            style={{ backgroundColor: '#81754C' }}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <DesktopMenu />
    </header>
  );
};

export default Header;