import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Homepage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/transactionform"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
          Welcome to <span className="text-yellow-300">Finance Portal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          Seamlessly manage your transactions. Add, edit, and track your financial records with confidence and ease.
        </p>

        <button
          onClick={handleNavigate}
          disabled={loading}
          className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-70"
        >
          {loading ? <LoadingSpinner small /> : "➕ Create Transaction"}
        </button>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full -z-10 animate-pulse"></div>
    </div>
  );
};

export default Homepage;
