import React from 'react';
import { cmsService } from '../lib/cms';
import { Star, Users, Award, TrendingUp, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const heroData = cmsService.getHero();

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 pt-20 pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
            <span className="text-white font-medium text-sm sm:text-base">{heroData.trustBadge.text}</span>
            <div className="flex text-yellow-400 ml-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              ))}
            </div>
            <span className="text-white/90 text-xs sm:text-sm ml-2">{heroData.trustBadge.rating}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            <span className="block">{heroData.headline.main}</span>
            <span className="text-yellow-400 block">{heroData.headline.highlight}</span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 block mt-2 sm:mt-4">{heroData.headline.subtitle}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
            <a 
              href={heroData.buttons.primary.href}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-center text-base sm:text-lg relative overflow-hidden group flex items-center justify-center min-h-[56px]"
            >
              <span className="relative z-10">{heroData.buttons.primary.text}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a 
              href={heroData.buttons.secondary.href}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-xl transition-all text-center text-base sm:text-lg flex items-center justify-center min-h-[56px]"
            >
              {heroData.buttons.secondary.text}
            </a>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            {heroData.benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">{benefit.icon}</div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{heroData.socialProof.text}</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              {heroData.socialProof.publications.map((publication, index) => (
                <span key={index} className="text-white font-semibold text-sm sm:text-base">{publication}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;