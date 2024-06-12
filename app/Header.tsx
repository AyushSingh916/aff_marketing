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

type NavLink = {
  text: string;
  href: string;
  sublinks?: NavLink[];
};

const navmenuItems: NavLink[] = [
  {
    text: 'Home',
    href: '/home-garden',
    sublinks: [
      {
        text: 'Furniture',
        href: '/home-garden/furniture',
        sublinks: [
          { text: 'Living Room', href: '/home-garden/furniture/living-room' },
          { text: 'Bedroom', href: '/home-garden/furniture/bedroom' },
        ],
      },
      {
        text: 'Decor',
        href: '/home-garden/decor',
        sublinks: [
          { text: 'Wall Art', href: '/home-garden/decor/wall-art' },
          { text: 'Lighting', href: '/home-garden/decor/lighting' },
        ],
      },
      { text: 'Outdoor', href: '/home-garden/outdoor' },
    ],
  },
  {
    text: 'Electronic Devices',
    href: '/kitchen',
    sublinks: [
      {
        text: 'Appliances',
        href: '/kitchen/appliances',
        sublinks: [
          { text: 'Refrigerators', href: '/kitchen/appliances/refrigerators' },
          { text: 'Microwaves', href: '/kitchen/appliances/microwaves' },
        ],
      },
      {
        text: 'Cookware',
        href: '/kitchen/cookware',
        sublinks: [
          { text: 'Pots & Pans', href: '/kitchen/cookware/pots-pans' },
          { text: 'Utensils', href: '/kitchen/cookware/utensils' },
        ],
      },
      { text: 'Storage', href: '/kitchen/storage' },
    ],
  },
  {
    text: 'Electronic Appliances',
    href: '/kitchen',
    sublinks: [
      {
        text: 'Appliances',
        href: '/kitchen/appliances',
        sublinks: [
          { text: 'Refrigerators', href: '/kitchen/appliances/refrigerators' },
          { text: 'Microwaves', href: '/kitchen/appliances/microwaves' },
        ],
      },
      {
        text: 'Cookware',
        href: '/kitchen/cookware',
        sublinks: [
          { text: 'Pots & Pans', href: '/kitchen/cookware/pots-pans' },
          { text: 'Utensils', href: '/kitchen/cookware/utensils' },
        ],
      },
      { text: 'Storage', href: '/kitchen/storage' },
    ],
  },
  {
    text: 'Automobiles',
    href: '/tech',
    sublinks: [
      {
        text: 'Computers',
        href: '/tech/computers',
        sublinks: [
          { text: 'Laptops', href: '/tech/computers/laptops' },
          { text: 'Desktops', href: '/tech/computers/desktops' },
        ],
      },
      {
        text: 'Mobile',
        href: '/tech/mobile',
        sublinks: [
          { text: 'Smartphones', href: '/tech/mobile/smartphones' },
          { text: 'Tablets', href: '/tech/mobile/tablets' },
        ],
      },
      { text: 'Gaming', href: '/tech/gaming' },
    ],
  },
  {
    text: 'Ai-Tools',
    href: '/tech',
    sublinks: [
      {
        text: 'Computers',
        href: '/tech/computers',
        sublinks: [
          { text: 'Laptops', href: '/tech/computers/laptops' },
          { text: 'Desktops', href: '/tech/computers/desktops' },
        ],
      },
      {
        text: 'Mobile',
        href: '/tech/mobile',
        sublinks: [
          { text: 'Smartphones', href: '/tech/mobile/smartphones' },
          { text: 'Tablets', href: '/tech/mobile/tablets' },
        ],
      },
      { text: 'Gaming', href: '/tech/gaming' },
    ],
  },
  {
    text: 'Health & Lifestyle',
    href: '/health-lifestyle',
    sublinks: [
      {
        text: 'Fitness',
        href: '/health-lifestyle/fitness',
        sublinks: [
          { text: 'Equipment', href: '/health-lifestyle/fitness/equipment' },
          { text: 'Wearables', href: '/health-lifestyle/fitness/wearables' },
        ],
      },
      {
        text: 'Wellness',
        href: '/health-lifestyle/wellness',
        sublinks: [
          {
            text: 'Supplements',
            href: '/health-lifestyle/wellness/supplements',
          },
          { text: 'Meditation', href: '/health-lifestyle/wellness/meditation' },
        ],
      },
      { text: 'Nutrition', href: '/health-lifestyle/nutrition' },
    ],
  },
  {
    text: 'Fashion & Clothing',
    href: '/baby-kid',
    sublinks: [
      {
        text: 'Toys',
        href: '/baby-kid/toys',
        sublinks: [
          { text: 'Educational', href: '/baby-kid/toys/educational' },
          { text: 'Outdoor', href: '/baby-kid/toys/outdoor' },
        ],
      },
      {
        text: 'Clothing',
        href: '/baby-kid/clothing',
        sublinks: [
          { text: 'Infants', href: '/baby-kid/clothing/infants' },
          { text: 'Toddlers', href: '/baby-kid/clothing/toddlers' },
        ],
      },
      { text: 'Gear', href: '/baby-kid/gear' },
    ],
  },
  {
    text: 'Deals',
    href: '/deals',
    sublinks: [
      { text: 'Todays Deals', href: '/deals/todays-deals' },
      { text: 'Upcoming Deals', href: '/deals/upcoming-deals' },
      { text: 'Expired Deals', href: '/deals/expired-deals' },
    ],
  },
];

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
      }, 2000)
    );
  };

  return (
    <header className="flex flex-col w-full h-fit border-b border-gray-200">
      <div className="flex items-center justify-between h-16 lg:h-24 px-4">
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
            className="bg-black text-white rounded px-4 py-2"
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
      <NavigationMenu className="hidden lg:flex justify-center gap-8 py-2 relative">
        <NavigationMenuList className="flex gap-8">
          {navmenuItems.map((item) => (
            <NavigationMenuItem
              key={item.text}
              onMouseEnter={() => handleMouseEnter(item.text)}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>
                  <div className="hover:bg-accent p-2 rounded-md w-full">
                    {item.text}
                  </div>
                </Link>
              </NavigationMenuLink>
              {hoveredItem === item.text && item.sublinks && (
                <div
                  className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg border rounded"
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={handleMouseLeave}
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
