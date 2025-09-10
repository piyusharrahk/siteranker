import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, X, ExternalLink, Shield } from 'lucide-react';
import { cmsService } from '../lib/cms';
import { brandData } from '../data/brandData';

// Convert brandData to array format for display
const builders = Object.values(brandData).map((brand, index) => ({
  id: index + 1,
  ...brand,
  features: brand.features.slice(0, 4), // Show only first 4 features in comparison
  pros: brand.pros.slice(0, 3), // Show only first 3 pros
  cons: brand.cons.slice(0, 3) // Show only first 3 cons
}));

const Comparison: React.FC = () => {
  const comparisonData = cmsService.getComparison();

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
      purple: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl',
      green: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl',
      indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl',
      orange: 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-lg hover:shadow-xl',
      teal: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg hover:shadow-xl',
      red: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl',
      pink: 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 shadow-lg hover:shadow-xl'
    };
    return colors[color] || 'bg-blue-600 hover:bg-blue-700';
  };

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {comparisonData.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {comparisonData.headline.main}
            <span className="text-blue-600 block">{comparisonData.headline.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {comparisonData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {builders.map((builder, index) => (
            <div key={builder.id} className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 flex flex-col h-full min-h-[600px] sm:min-h-[650px]">
              {/* Top Badge */}
              {index === 0 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                  🏆 #1 EDITOR'S CHOICE
                </div>
              )}
              {index === 1 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                  🥈 #2 BEST VALUE
                </div>
              )}
              {index === 2 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                  🥉 #3 POPULAR
                </div>
              )}
              
              <div className="p-4 sm:p-6 lg:p-8 relative flex flex-col h-full">
                {/* Enhanced Ranking Badge */}
                <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg z-10 ${
                  index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' :
                  index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' :
                  index === 2 ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' :
                  'bg-gradient-to-br from-gray-600 to-gray-700 text-white'
                }`}>
                  {index + 1}
                </div>
                
                <div className="flex items-start justify-between mb-4 sm:mb-6 pt-8 sm:pt-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl">{builder.logo}</span>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{builder.name}</h3>
                        {index < 3 && (
                          <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                            index === 0 ? 'bg-yellow-100 text-yellow-800' :
                            index === 1 ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {index === 0 ? 'BEST' : index === 1 ? 'VALUE' : 'POPULAR'}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${i < Math.floor(builder.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 font-bold">{builder.rating}/5</span>
                        <span className="text-xs text-gray-500">({Math.floor(Math.random() * 500 + 100)} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-xs font-bold mb-1 whitespace-nowrap ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-green-100 text-green-800' :
                      index === 2 ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {index === 0 ? 'TOP RATED' : index === 1 ? 'BEST VALUE' : index === 2 ? 'TRENDING' : 'FEATURED'}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">{builder.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">Starting at</div>
                  </div>
                </div>
                
                {/* Quick Features */}
                <div className="mb-4 sm:mb-6 lg:mb-8 flex-grow">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {builder.freeVersion && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        FREE VERSION
                      </span>
                    )}
                    {builder.ecommerce && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        E-COMMERCE
                      </span>
                    )}
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      {builder.templates}+ TEMPLATES
                    </span>
                  </div>
                  
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-xl border-l-4 border-blue-500 min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">🎯 PERFECT FOR:</h4>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">{builder.bestFor}</p>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8 flex-grow">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                      ⚡ TOP FEATURES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 min-h-[50px] sm:min-h-[60px] lg:min-h-[80px]">
                      {builder.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Check className="h-3 w-3 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden sm:grid grid-cols-2 gap-3 sm:gap-4 min-h-[100px] sm:min-h-[120px]">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-green-700 mb-2 flex items-center">
                        ✅ PROS
                      </h4>
                      <ul className="space-y-1 flex-grow">
                        {builder.pros.slice(0, 3).map((pro, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start">
                            <span className="text-green-500 mr-1">•</span>
                            <span className="line-clamp-2">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-red-700 mb-2 flex items-center">
                        ❌ CONS
                      </h4>
                      <ul className="space-y-1 flex-grow">
                        {builder.cons.slice(0, 3).map((con, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start">
                            <span className="text-red-500 mr-1">•</span>
                            <span className="line-clamp-2">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-2 sm:space-y-3 mt-auto">
                  <a 
                    href={builder.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${getColorClasses(builder.color)} text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg min-h-[48px] sm:min-h-[56px]`}
                  >
                    <span>🚀 Start Free Trial</span>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <Link 
                    to={`/brand/${builder.slug}`}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-colors text-center block flex items-center justify-center text-sm sm:text-base min-h-[40px] sm:min-h-[48px]"
                  >
                    📖 Read Full Review
                  </Link>
                </div>
                
                {/* Trust Signal */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                'bg-gradient-to-br from-gray-500 to-gray-600 text-white'
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{comparisonData.bottomCTA.headline}</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {comparisonData.bottomCTA.description}
            </p>
            <a 
              href={comparisonData.bottomCTA.buttonHref}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-xl transition-colors inline-flex items-center space-x-2"
            >
              <span>{comparisonData.bottomCTA.buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;