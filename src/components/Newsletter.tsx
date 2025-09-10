import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cmsService } from '../lib/cms';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const newsletterData = cmsService.getNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Save newsletter subscription to CMS
      cmsService.addEmailSubscriber({
        email: email,
        subscribeDate: new Date().toISOString().split('T')[0],
        source: 'Newsletter Signup',
        active: true
      });
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2" />
            <span className="text-white font-bold text-sm sm:text-base">{newsletterData.badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            {newsletterData.headline.main} <span className="text-yellow-300">{newsletterData.headline.highlight}</span>
            {newsletterData.headline.subtitle && (
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 sm:mt-4 text-white/90">
                {newsletterData.headline.subtitle}
              </span>
            )}
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 max-w-3xl mx-auto border border-white/20 mx-4 sm:mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white">
              {newsletterData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            {newsletterData.description}
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 sm:px-0">
              <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterData.form.placeholder}
                    required
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px] flex items-center"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg whitespace-nowrap min-h-[48px] sm:min-h-[56px] flex items-center justify-center"
                  >
                    {newsletterData.form.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-6 text-white/80 text-xs sm:text-sm">
                {newsletterData.trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-md mx-auto border border-white/30 mx-4 sm:mx-auto"
            >
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Aboard! 🎉</h3>
              <p className="text-sm sm:text-base text-white/90">Check your email for your first insider report!</p>
            </motion.div>
          )}
          
          {/* Social Proof */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center max-w-4xl mx-auto px-4 sm:px-0">
              {newsletterData.socialProof.map((proof, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-2">{proof.value}</div>
                  <div className="text-white/80 text-xs sm:text-sm">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;