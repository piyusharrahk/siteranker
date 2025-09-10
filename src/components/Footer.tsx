import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, MessageCircle, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Star className="h-8 w-8 text-blue-400 fill-blue-400" />
              <span className="text-xl font-bold">SiteRanker</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted source for unbiased website builder reviews and comparisons. 
              We help you make informed decisions for your online presence.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/siteranker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/siteranker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/siteranker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/siteranker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/siteranker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Website Builder Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Guides</Link></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Comparison Charts</a></li>
              <li><Link to="/blog/website-builder-pricing-guide" className="hover:text-white transition-colors">Pricing Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SiteRanker. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Last updated: January 2025 | Reviews based on current pricing and features
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;