import React from 'react';
import './LoadingSpinner.css'; // Ensure this file exists and contains the necessary CSS

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src="https://img.icons8.com/?size=100&id=MzzEkuHLLvrm&format=png&color=000000" alt="Loading" className="spinner-logo" />
    </div>
  );
};

export default LoadingSpinner;
