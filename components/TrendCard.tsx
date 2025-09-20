
import React from 'react';
import type { Trend } from '../types';
import { MusicIcon, ReelIcon, YoutubeIcon, SpotifyIcon, TiktokIcon, InstagramIcon } from './Icons';

interface TrendCardProps {
  trend: Trend;
}

const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
    const p = platform.toLowerCase();
    if (p.includes('tiktok')) return <TiktokIcon className="w-5 h-5 text-cyan-400" />;
    if (p.includes('instagram')) return <InstagramIcon className="w-5 h-5 text-pink-500" />;
    if (p.includes('youtube')) return <YoutubeIcon className="w-5 h-5 text-red-500" />;
    return null;
}

export const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
  const { title, artist, description, platform, type } = trend;
  
  const searchQuery = artist ? `${title} ${artist}` : title;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(searchQuery)}`;

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col h-full shadow-lg hover:shadow-purple-500/10 hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {type === 'song' ? <MusicIcon className="w-6 h-6 text-purple-400" /> : <ReelIcon className="w-6 h-6 text-teal-400" />}
            <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full capitalize flex items-center gap-1.5">
              <PlatformIcon platform={platform} />
              {platform}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
        {artist && <p className="text-sm text-gray-400 mb-4">{artist}</p>}
        <p className="text-gray-300 text-sm leading-relaxed mt-2">{description}</p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-xs text-center text-gray-500 mb-3">Explore this trend on other platforms:</p>
        <div className="flex items-center justify-center gap-3">
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-red-600/50 text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                <YoutubeIcon className="w-5 h-5" />
                <span>YouTube</span>
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-green-600/50 text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                <SpotifyIcon className="w-5 h-5" />
                <span>Spotify</span>
            </a>
        </div>
        <p className="text-center text-gray-600 text-xs mt-4 italic">Note: This app provides discovery links and does not offer direct downloads.</p>
      </div>
    </div>
  );
};
