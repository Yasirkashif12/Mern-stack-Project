import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 rounded-full"></div>

        <div className="absolute w-16 h-16 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>

        <div className="absolute w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
