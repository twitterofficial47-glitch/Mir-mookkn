import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TrendCard } from './components/TrendCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { getTrendingContent } from './services/geminiService';
import type { Trend } from './types';
import { InfoIcon, MusicIcon, SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const results = await getTrendingContent(query);
      setTrends(results);
    } catch (err) {
      setError('Sorry, we hit a snag trying to find trends. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/20 border border-red-600 p-6 rounded-lg max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2">An Error Occurred</h3>
          <p>{error}</p>
        </div>
      );
    }
    if (!hasSearched) {
      return (
        <div className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          <div className="flex justify-center items-center mb-4">
              <SparklesIcon className="w-12 h-12 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-2">Welcome to my app</h2>
          <p>Discover the hottest songs and reels lighting up social media.</p>
          <p className="mt-4">Try searching for "trending songs on Instagram" or "latest TikTok dance challenges".</p>
        </div>
      );
    }
    if (trends.length === 0) {
      return (
        <div className="text-center text-gray-400 mt-8">
            <h2 className="text-2xl font-bold text-gray-200 mb-2">No Trends Found</h2>
            <p>We couldn't find any trends matching your search. Try a different query!</p>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trends.map((trend, index) => (
          <TrendCard key={`${trend.title}-${index}`} trend={trend} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-gray-900 via-gray-900/50 to-transparent"></div>

        <main className="container mx-auto px-4 py-8 md:py-12">
          <Header />
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          <div className="mt-12">
            {renderContent()}
          </div>
        </main>
         <footer className="text-center py-6 mt-12 text-gray-500 text-sm">
            <p>Designed by Moomin</p>
            <p className="mt-1">&copy; {new Date().getFullYear()} Trend Spotter. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;