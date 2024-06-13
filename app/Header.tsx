'use client';

import { useState, useEffect, useRef } from 'react';
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
import autocompleteData from '@/data/autocomplete.json';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openedItem, setOpenedItem] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<{ text: string; href: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemText: string) => {
    if (openedItem === itemText) {
      setOpenedItem(null);
    } else {
      setOpenedItem(itemText);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenedItem(null);
        setShowSuggestions(false);
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

  const handleSublinkClick = () => {
    setHoveredItem(null);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);

    if (value) {
      const filteredSuggestions = autocompleteData.filter((item) =>
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (href: string) => {
    setSearchInput('');
    setShowSuggestions(false);
    window.location.href = href;
  };

  return (
    <header
      className="flex flex-col w-full h-fit font-star-jedi"
      style={{ backgroundColor: '#EEEEEE' }}
    >
      <div
        className="flex items-center justify-between h-16 lg:h-24 px-4 border-b border-black"
        style={{ boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)' }}
      >
        {/* Search Bar */}
        <div className="hidden lg:flex items-center relative">
          <input
            type="text"
            placeholder="Help me decide on..."
            className="rounded-md border border-[#D9D9D9] bg-[rgba(217,217,217,0.20)] w-[218px] h-[49px] flex-shrink-0 px-4 py-2"
            style={{
              boxShadow:
                '-2px -2px 4px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset',
            }}
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          {showSuggestions && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg border rounded z-10">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <div
                    key={suggestion.text}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion.href)}
                  >
                    {suggestion.text}
                  </div>
                ))
              ) : (
                <div className="p-2 text-red-500">Sorry, not found</div>
              )}
            </div>
          )}
        </div>

        {/* Logo */}
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
                      <div className="flex flex-col pl-4">
                        {item.sublinks.map((sublink) => (
                          <div key={sublink.text} className="mt-2">
                            <SheetClose asChild>
                              <Link
                                className="hover:underline block"
                                href={sublink.href}
                                onClick={handleSublinkClick}
                              >
                                {sublink.text}
                              </Link>
                            </SheetClose>
                            {sublink.sublinks && (
                              <div className="flex flex-col pl-4">
                                {sublink.sublinks.map((subsublink) => (
                                  <div key={subsublink.text} className="mt-2">
                                    <SheetClose asChild>
                                      <Link
                                        className="hover:underline block"
                                        href={subsublink.href}
                                        onClick={handleSublinkClick}
                                      >
                                        {subsublink.text}
                                      </Link>
                                    </SheetClose>
                                  </div>
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
      <NavigationMenu
        className="hidden lg:flex justify-center gap-8 py-2 px-8 relative z-0"
        style={{
          boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)',
          backgroundColor: '#EEEEEE',
        }}
      >
        <NavigationMenuList className="flex gap-8">
          {navmenuItems.map((item) => (
            <NavigationMenuItem
              key={item.text}
              onMouseEnter={() => handleMouseEnter(item.text)}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                style={{ backgroundColor: '#EEEEEE' }}
              >
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
                        <Link href={sublink.href} onClick={handleSublinkClick}>
                          <div className="font-semibold hover:underline">
                            {sublink.text}
                          </div>
                        </Link>
                        {sublink.sublinks && (
                          <div className="pl-4">
                            {sublink.sublinks.map((subsublink) => (
                              <Link
                                key={subsublink.text}
                                href={subsublink.href}
                                onClick={handleSublinkClick}
                              >
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
