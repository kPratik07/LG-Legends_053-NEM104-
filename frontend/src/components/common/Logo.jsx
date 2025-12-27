import React from 'react';

const Logo = ({ width = 140, height = 40, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Icon - Modern book/stack symbol with glow effect */}
      <g transform="translate(0, 8)" filter="url(#glow)">
        {/* Bottom book layer */}
        <rect x="2" y="18" width="16" height="12" rx="1" fill="url(#logoGradient)" opacity="0.8"/>
        {/* Middle book layer */}
        <rect x="4" y="14" width="16" height="12" rx="1" fill="url(#logoGradient)" opacity="0.9"/>
        {/* Top book layer */}
        <rect x="6" y="10" width="16" height="12" rx="1" fill="url(#logoGradient)"/>
        
        {/* Book pages detail */}
        <line x1="8" y1="13" x2="20" y2="13" stroke="white" strokeWidth="0.5" opacity="0.8"/>
        <line x1="8" y1="15" x2="18" y2="15" stroke="white" strokeWidth="0.5" opacity="0.8"/>
        <line x1="8" y1="17" x2="20" y2="17" stroke="white" strokeWidth="0.5" opacity="0.8"/>
        
        {/* Knowledge sparkles */}
        <circle cx="18" cy="8" r="1.5" fill="#FCD34D" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="22" cy="6" r="1" fill="#FCD34D" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="20" cy="4" r="0.8" fill="#FCD34D" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Text - Knowledge Knook */}
      <g transform="translate(28, 0)">
        {/* Knowledge - White for visibility */}
        <text x="0" y="15" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="13" fontWeight="600" fill="white">
          Knowledge
        </text>
        {/* Knook - White with subtle gradient overlay */}
        <text x="0" y="30" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="13" fontWeight="700" fill="white">
          Knook
        </text>
        {/* Gradient overlay for Knook */}
        <text x="0" y="30" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="13" fontWeight="700" fill="url(#logoGradient)" opacity="0.8">
          Knook
        </text>
      </g>
    </svg>
  );
};

export default Logo;
