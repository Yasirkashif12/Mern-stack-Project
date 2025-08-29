import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-yellow-300 drop-shadow-lg">
          Finance Portal
        </div>

        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/transactionsuccess/showtransaction"
            className="hover:text-yellow-300 transition duration-200"
          >
            View Transactions
          </Link>
          <Link
            to="/logout"
            className="hover:text-yellow-300 transition duration-200"
          >
            Logout
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4 space-y-4 text-white font-medium text-center animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/transactionsuccess/showtransaction" onClick={() => setIsOpen(false)}>
            View Transactions
          </Link>
          <Link to="/logout" onClick={() => setIsOpen(false)}>
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
