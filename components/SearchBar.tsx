import React, { useState, useRef, useEffect } from 'react';
import autocompleteData from '@/data/autocomplete.json';

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<{ text: string; href: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <div className="hidden lg:flex items-center relative z-20">
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
        <div ref={suggestionRef} className="absolute top-full mt-2 w-full bg-white shadow-lg border rounded z-10">
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
  );
};

export default SearchBar;
