import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Check, X, ExternalLink, ArrowLeft, DollarSign, Users, Award } from 'lucide-react';
import { brandData } from '../data/brandData';


const BrandPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const brand = brandData[brandName?.toLowerCase() || ''];

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Comparison
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{brand.logo}</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {brand.hero.title}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(brand.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-lg text-gray-600 font-medium">{brand.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {brand.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={brand.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg min-h-[56px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
                <div className="text-center sm:text-left flex flex-col justify-center">
                  <div className="text-2xl font-bold text-gray-900">{brand.price}</div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={brand.hero.image}
                alt={`${brand.name} website builder`}
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {brand.overview}
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best For</h3>
              <p className="text-gray-700">{brand.bestFor}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Pros/Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-3">
                {brand.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">Pros</h3>
              <ul className="space-y-3">
                {brand.pros.map((pro: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-6">Cons</h3>
              <ul className="space-y-3">
                {brand.cons.map((con: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {brand.pricing.map((plan: any, index: number) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    ${plan.price}<span className="text-sm text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={brand.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors block text-center mt-auto"
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Verdict</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {brand.verdict}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={brand.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg min-h-[56px]"
              >
                <span>Try {brand.name} Free</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <Link
                to="/"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center flex items-center justify-center min-h-[56px]"
              >
                Compare Other Builders
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;