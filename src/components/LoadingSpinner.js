import React from 'react';
import './LoadingSpinner.css'; // Ensure this file exists and contains the necessary CSS

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src="/logo.png" alt="Loading" className="spinner-logo" />
    </div>
  );
};

export default LoadingSpinner;
