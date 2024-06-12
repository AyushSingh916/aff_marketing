'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import navmenuItems from '@/data/header_nav_links.json';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openedItem, setOpenedItem] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemText: string) => {
    if (openedItem === itemText) {
      setOpenedItem(null);
    } else {
      setOpenedItem(itemText);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenedItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (itemText: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredItem(itemText);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoverTimeout(
      setTimeout(() => {
        setHoveredItem(null);
      }, 500)
    );
  };

  return (
    <header className="flex flex-col w-full h-fit font-star-jedi" style={{ backgroundColor: '#EEEEEE' }}>
      <div className="flex items-center justify-between h-16 lg:h-24 px-4 border-b border-black" style={{ boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)' }}>
        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            placeholder="Help me decide on..."
            className="border rounded px-4 py-2"
          />
        </div>

        {/* Logo */}
        <Link href="/" className="flex justify-center">
          <Image
            src="/logo.png"
            width={150}
            height={24}
            alt="Affiliate Marketing Logo"
            priority
          />
        </Link>

        {/* About and Contact Us Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/about" className="hidden lg:block">
            About
          </Link>
          <Link
            href="/contact-us"
            className="text-white rounded px-4 py-2"
            style={{ backgroundColor: '#81754C' }}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <div className="lg:hidden">
                <MenuIcon size="2rem" />
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <div ref={menuRef} className="flex flex-col gap-2 mt-4 -mr-2">
                {navmenuItems.map((item) => (
                  <div key={item.text}>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleItemClick(item.text)}
                    >
                      <SheetClose asChild>
                        <Link className="hover:underline" href={item.href}>
                          {item.text}
                        </Link>
                      </SheetClose>
                      {item.sublinks && (
                        <ChevronDownIcon
                          className={`transition-transform duration-300 ${
                            openedItem === item.text ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>
                    {openedItem === item.text && item.sublinks && (
                      <div className="pl-4">
                        {item.sublinks.map((sublink) => (
                          <div key={sublink.text}>
                            <SheetClose asChild>
                              <Link className="hover:underline" href={sublink.href}>
                                {sublink.text}
                              </Link>
                            </SheetClose>
                            {sublink.sublinks && (
                              <div className="pl-4">
                                {sublink.sublinks.map((subsublink) => (
                                  <SheetClose key={subsublink.text} asChild>
                                    <Link className="hover:underline" href={subsublink.href}>
                                      {subsublink.text}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="hidden lg:flex justify-center gap-8 py-2 px-8 relative" style={{ boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#EEEEEE' }}>
        <NavigationMenuList className="flex gap-8">
          {navmenuItems.map((item) => (
            <NavigationMenuItem
              key={item.text}
              onMouseEnter={() => handleMouseEnter(item.text)}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>
                  <div className="hover:bg-accent p-2 rounded-md w-full font-bold">
                    {item.text}
                  </div>
                </Link>
              </NavigationMenuLink>
              {hoveredItem === item.text && item.sublinks && (
                <div
                  className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg border rounded"
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={handleMouseLeave}
                  style={{ boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)' }}
                >
                  <div className="grid grid-cols-3 gap-4 p-4">
                    {item.sublinks.map((sublink) => (
                      <div key={sublink.text}>
                        <Link href={sublink.href}>
                          <div className="font-semibold hover:underline">
                            {sublink.text}
                          </div>
                        </Link>
                        {sublink.sublinks && (
                          <div className="pl-4">
                            {sublink.sublinks.map((subsublink) => (
                              <Link key={subsublink.text} href={subsublink.href}>
                                <div className="hover:underline">
                                  {subsublink.text}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
