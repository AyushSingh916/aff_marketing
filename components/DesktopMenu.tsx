'use client';

import { useState } from 'react';
import Link from 'next/link';
import navmenuItems from '@/data/header_nav_links.json';

const DesktopMenu: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="hidden lg:flex justify-center gap-8 py-2 px-8 relative z-0"
      style={{
        boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#EEEEEE',
        width: '100vw',
        left: '0',
      }}
    >
      <ul className="flex gap-8">
        {navmenuItems.map((item) => (
          <li
            key={item.text}
            onMouseEnter={() => handleMouseEnter(item.text)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="hover:bg-accent p-2 rounded-md w-full font-bold"
              style={{ backgroundColor: '#EEEEEE' }}
            >
              {/* <Link href={item.href}>{item.text}</Link> */}
              <button onClick={() => scrollToSection(item.href)}>{item.text}</button>
            </div>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;
