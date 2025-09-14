import React from 'react';

const NoResultsIcon = ({ className = '', ...props }) => {
  return (
    <svg 
      className={className}
      width="48" 
      height="48" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
      />
    </svg>
  );
};

export default NoResultsIcon;
