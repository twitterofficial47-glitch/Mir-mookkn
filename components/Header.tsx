
import React from 'react';
import { MusicIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <div className="inline-flex items-center gap-3 mb-2">
        <MusicIcon className="w-10 h-10 text-purple-400" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Trend Spotter
        </h1>
      </div>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Your daily source for the hottest trends on social media.
      </p>
    </header>
  );
};
