import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 text-xl font-bold">
              SkillExchange
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/skills" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Browse Skills
            </Link>
            <Link to="/learn" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Learn
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Community
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-blue-600 border border-blue-600 rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
