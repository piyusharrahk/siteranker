import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-blue-600 fill-blue-600" />
            <span className="text-xl font-bold text-gray-900">SiteRanker</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#comparison" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Compare Builders
            </a>
            <Link 
              to="/blog" 
              className={`transition-colors font-medium ${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Blog
            </Link>
            <a 
              href="#faq" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              FAQ
            </a>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              <a 
                href="#comparison" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Compare Builders
              </a>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#faq" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;