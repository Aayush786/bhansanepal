import React from 'react';

export default function Logo({ className = '', width = '200px', height = 'auto', color = 'currentColor' }) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 240 150" 
        width="100%" 
        height="100%"
        className="select-none"
      >
        <defs>
          <style>{`
            @keyframes float-smoke {
              0% {
                transform: translateY(0) scaleX(1);
                opacity: 0.7;
              }
              50% {
                transform: translateY(-3px) scaleX(1.1);
                opacity: 1;
              }
              100% {
                transform: translateY(0) scaleX(1);
                opacity: 0.7;
              }
            }
            .smoke-1 {
              animation: float-smoke 2.4s ease-in-out infinite;
              transform-origin: 207px 37px;
            }
            .smoke-2 {
              animation: float-smoke 2.4s ease-in-out infinite;
              animation-delay: 1.2s;
              transform-origin: 211px 35px;
            }
          `}</style>
        </defs>

        {/* First line: bhansa */}
        <g fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* b: stem */}
          <path d="M 50,35 V 80" />
          {/* b: bowl */}
          <path d="M 50,60 C 58,56 70,56 70,70 C 70,82 58,82 50,80" />
          {/* b: pan handle */}
          <path d="M 50,62 C 35,53 20,53 10,58" />
          
          {/* h: stem & arch */}
          <path d="M 82,35 V 80" />
          <path d="M 82,62 C 87,57 98,57 98,68 V 80" />
          
          {/* a: bowl & stem */}
          <path d="M 122,66 C 118,58 109,58 109,69 C 109,80 118,80 122,74 V 80" />
          <path d="M 122,58 V 80" />
          
          {/* n: stem & arch */}
          <path d="M 136,58 V 80" />
          <path d="M 136,66 C 141,57 152,57 152,68 V 80" />
          
          {/* s: curve */}
          <path d="M 172,61 C 166,58 163,63 166,67 C 169,71 173,72 170,77 C 167,81 161,80 159,76" />
        </g>
        
        {/* House (representing final a) - filled */}
        <path 
          d="M 183,62 L 198,48 L 213,62 H 208 V 80 H 201 V 73 C 201,70 195,70 195,73 V 80 H 188 V 62 Z" 
          fill={color} 
        />
        {/* Chimney */}
        <path 
          d="M 205,55 V 42 H 209 V 58 Z" 
          fill={color} 
        />
        {/* Smoke (with float animation) */}
        <path 
          className="smoke-1"
          d="M 207,37 C 205,32 209,29 207,24 C 205,19 209,16 207,11" 
          fill="none" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <path 
          className="smoke-2"
          d="M 211,35 C 209,30 213,27 211,22 C 209,17 213,14 211,9" 
          fill="none" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        {/* Second line: nepal */}
        <g fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* n: stem & arch */}
          <path d="M 82,98 V 120" />
          <path d="M 82,106 C 87,97 98,97 98,108 V 120" />
          
          {/* e: loop & curve */}
          <path d="M 122,111 H 110 C 110,102 121,102 121,110 C 121,118 110,118 110,111" />
          
          {/* p: stem & bowl */}
          <path d="M 136,98 V 130" />
          <path d="M 136,106 C 141,97 152,97 152,108 C 152,119 141,119 136,115" />
          
          {/* a: bowl & stem */}
          <path d="M 170,105 C 166,98 157,98 157,109 C 157,120 166,120 170,114 V 120" />
          <path d="M 170,98 V 120" />
          
          {/* l: stem */}
          <path d="M 183,86 V 120" />
        </g>
      </svg>
    </div>
  );
}
