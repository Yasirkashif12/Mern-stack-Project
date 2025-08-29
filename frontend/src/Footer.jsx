import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/transactionsuccess/showtransaction"
            className="hover:text-white transition-colors duration-200"
          >
            Transactions
          </Link>
          <Link
            to="/about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
