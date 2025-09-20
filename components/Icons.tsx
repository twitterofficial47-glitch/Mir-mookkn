
import React from 'react';

type IconProps = {
  className?: string;
};

export const MusicIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const ReelIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export const SpotifyIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.41 17.412c-.22.358-.69.47-1.048.25s-.47-.69-.25-1.048c1.83-2.968 2.05-6.62-.2-9.452-.358-.22-.47-.69-.25-1.048.22-.358.69-.47 1.048-.25 2.62 3.2 2.37 7.42-.3 11.548zm-3.41-3.23c-.2.32-.6.41-1.01.21-.4-.2-.5-.6-.3-1.01.9-2.3 1-4.9-.1-7.1-.2-.3.1-.7.4-1 .3-.2.7-.1 1 .2 1.3 2.5 1.1 5.6-.2 8.7zm-3.5-3.3c-.15.25-.5.35-.75.2-.25-.15-.35-.5-.2-.75.9-1.9 1-3.9-.1-5.6-.15-.25.1-.6.4-.7.3-.15.6.1.7.4 1.3 2.1 1.1 4.5-.2 6.45z"/>
    </svg>
);

export const TiktokIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.93-2.03-4.35-1.7-6.73.29-2.13 1.3-4.12 2.9-5.45 1.94-1.59 4.39-2.1 6.64-1.74.08 1.48.63 2.98 1.76 4.04.99.95 2.32 1.41 3.69 1.46v-4.03c-1.21-.03-2.39-.42-3.38-1.09-.54-.37-1.04-.8-1.48-1.28-.01 2.87.01 5.74-.02 8.61-.13 1.03-.49 2.04-1.09 2.9-.84 1.22-2.13 2.05-3.52 2.13-1.42.08-2.81-.36-3.88-1.25-1.07-.89-1.68-2.1-1.81-3.38-.13-1.29.08-2.62.59-3.81.56-1.32 1.54-2.45 2.83-3.26 1.48-.92 3.19-1.23 4.88-1.02.01-1.46-.02-2.92-.01-4.38z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.13 0-3.485.01-4.7.068-2.583.118-3.927 1.46-4.045 4.045-.058 1.215-.067 1.57-.067 4.7s.009 3.485.067 4.7c.118 2.583 1.462 3.927 4.045 4.045 1.215.058 1.57.067 4.7.067s3.485-.009 4.7-.067c2.583-.118 3.927-1.462 4.045-4.045.058-1.215.067-1.57.067-4.7s-.009-3.485-.067-4.7c-.118-2.583-1.462-3.927-4.045-4.045-1.215-.058-1.57-.067-4.7-.067zm0 3.282c-2.404 0-4.35 1.946-4.35 4.35s1.946 4.35 4.35 4.35 4.35-1.946 4.35-4.35-1.946-4.35-4.35-4.35zm0 7.082c-1.503 0-2.72-1.217-2.72-2.72s1.217-2.72 2.72-2.72 2.72 1.217 2.72 2.72-1.217 2.72-2.72 2.72zm5.02-7.882c-.628 0-1.13.502-1.13 1.13s.502 1.13 1.13 1.13 1.13-.502 1.13-1.13-.502-1.13-1.13-1.13z"/>
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414l-2.293 2.293m0-4.586l2.293-2.293a1 1 0 011.414 0l2.293 2.293m-4.586 4.586l-2.293 2.293a1 1 0 01-1.414 0l-2.293-2.293m4.586 0l-2.293-2.293a1 1 0 010-1.414l2.293-2.293m0 4.586l2.293 2.293a1 1 0 010 1.414l-2.293 2.293m-4.586-4.586l-2.293 2.293a1 1 0 01-1.414 0l-2.293-2.293m16.586-6.586l-2.293 2.293a1 1 0 01-1.414 0l-2.293-2.293m4.586 0l-2.293-2.293a1 1 0 010-1.414l2.293-2.293m0 4.586l2.293 2.293a1 1 0 010 1.414l-2.293 2.293M12 9l.01 6M9 12h6" />
    </svg>
);
