'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import navmenuItems from '@/data/header_nav_links.json';

const MobileMenu: React.FC = () => {
  const [openedItem, setOpenedItem] = useState<string | null>(null);
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
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
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
  );
};

export default MobileMenu;
