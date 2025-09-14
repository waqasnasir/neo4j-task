import React from 'react';

const ErrorIcon = ({ className = '', ...props }) => {
  return (
    <svg 
      className={className}
      width="32" 
      height="32" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
      />
    </svg>
  );
};

export default ErrorIcon;
