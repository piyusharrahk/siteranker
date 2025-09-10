import React from 'react';
import { CheckCircle, AlertCircle, DollarSign, Zap } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <section id="guide" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            🎯 EXPERT STRATEGY GUIDE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            The 4-Step Formula to Choose
            <span className="text-green-600 block">Your Perfect Website Builder</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            <strong>Used by 2M+ successful website owners.</strong> This proven system eliminates guesswork 
            and guarantees you pick the right platform the first time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 mt-12 sm:mt-16">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Define Your Website Goals</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    <strong>Critical first step:</strong> Are you building an online store, portfolio, blog, or business website? 
                    Different builders excel at different purposes - choosing wrong costs you months of work.
                  </p>
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-800 font-semibold">💡 Pro Tip: Write down your top 3 must-have features before comparing platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 sm:p-6 lg:p-8 rounded-2xl border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Calculate Your True Budget</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    <strong>Hidden costs exposed:</strong> Monthly fees are just the start. Factor in transaction costs, 
                    premium templates, apps, and upgrade costs. We'll show you the real numbers.
                  </p>
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-green-800 font-semibold">💰 Insider Secret: Most users spend 3x their initial budget in year 1.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 sm:p-6 lg:p-8 rounded-2xl border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Match Your Skill Level</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    <strong>Honest assessment required:</strong> Some builders are perfect for beginners, others need 
                    technical skills. Choose wrong and you'll waste weeks struggling with complexity.
                  </p>
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-purple-800 font-semibold">⚡ Time Saver: Beginners save 40+ hours choosing the right difficulty level.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 sm:p-6 lg:p-8 rounded-2xl border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Plan for Growth</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    <strong>Future-proof your choice:</strong> Consider e-commerce needs, traffic growth, advanced SEO, 
                    and team collaboration. Switching platforms later costs $1000s and months of work.
                  </p>
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-orange-800 font-semibold">🚀 Growth Hack: Choose a platform that scales to 10x your current needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl text-white lg:sticky lg:top-8">
            <div className="text-center mb-8">
              <div className="bg-yellow-400 text-gray-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Instant Decision Guide</h3>
              <p className="text-gray-300 text-sm sm:text-base">Get your perfect match in 30 seconds</p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">?</span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Complete Beginner?</h4>
                </div>
                <p className="text-blue-200 text-xs sm:text-sm mb-3">Need something super easy with zero learning curve?</p>
                <div className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold">
                  → Choose Wix or Site123
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">🎨</span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Creative Professional?</h4>
                </div>
                <p className="text-purple-200 text-xs sm:text-sm mb-3">Need stunning design and complete creative control?</p>
                <div className="bg-purple-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold">
                  → Choose Squarespace or Webflow
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">🛒</span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Selling Products?</h4>
                </div>
                <p className="text-green-200 text-xs sm:text-sm mb-3">Need powerful e-commerce and payment processing?</p>
                <div className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold">
                  → Choose Shopify (unbeatable)
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">💰</span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Tight Budget?</h4>
                </div>
                <p className="text-orange-200 text-xs sm:text-sm mb-3">Need professional results without breaking the bank?</p>
                <div className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold">
                  → Choose Zyro or GoDaddy
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">📝</span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Content Creator?</h4>
                </div>
                <p className="text-indigo-200 text-xs sm:text-sm mb-3">Blogging and content are your main focus?</p>
                <div className="bg-indigo-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold">
                  → Choose WordPress.com
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-gray-900">
              <div className="text-center">
                <h4 className="font-bold text-base sm:text-lg mb-2">🎯 Still Not Sure?</h4>
                <p className="text-xs sm:text-sm mb-4">Get a personalized recommendation in 2 minutes</p>
                <button className="bg-gray-900 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center mx-auto min-h-[40px] sm:min-h-[48px] text-sm sm:text-base">
                  Take Quick Quiz →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-white max-w-4xl mx-auto mx-4 sm:mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Ready to Build Your Perfect Website?</h3>
            <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              You now have the insider knowledge to make the right choice. Don't waste another day with the wrong platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#comparison"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
              >
                🚀 See Top Recommendations
              </a>
              <a 
                href="#newsletter"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all flex items-center justify-center min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
              >
                📧 Get Free Insider Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;