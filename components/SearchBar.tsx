
import React, { useState } from 'react';
import { SearchIcon } from './Icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('Trending songs on Instagram');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., trending reels on TikTok"
          className="w-full pl-5 pr-32 py-4 text-base bg-gray-800 border-2 border-gray-700 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300 text-gray-200 placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute inset-y-2 right-2 flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          <SearchIcon className="w-5 h-5" />
          <span>{isLoading ? 'Searching...' : 'Search'}</span>
        </button>
      </div>
    </form>
  );
};
