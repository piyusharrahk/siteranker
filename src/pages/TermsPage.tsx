import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Shield, Globe, Users } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Scale className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>By accessing and using SiteRanker ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  <p>These Terms of Service ("Terms") govern your use of our website located at siteranker.com (the "Service") operated by SiteRanker.</p>
                </div>
              </div>

              {/* Use License */}
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Use License</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Permission is granted to temporarily download one copy of the materials on SiteRanker's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                  <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
                </div>
              </div>

              {/* User Accounts */}
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">User Accounts</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Safeguarding the password and all activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                    <li>Ensuring your account information remains accurate and up-to-date</li>
                  </ul>
                  <p>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.</p>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div className="bg-red-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Prohibited Uses</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>You may not use our service:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of the service</li>
                  </ul>
                </div>
              </div>

              {/* Content and Reviews */}
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Content and Reviews</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Our website contains reviews, comparisons, and opinions about various website builders and services. Please note:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reviews are based on our testing and research at the time of publication</li>
                    <li>Features, pricing, and availability of services may change without notice</li>
                    <li>We strive for accuracy but cannot guarantee all information is current</li>
                    <li>Some links may be affiliate links, and we may earn commissions from purchases</li>
                    <li>Our opinions are our own and not influenced by affiliate relationships</li>
                  </ul>
                </div>
              </div>

              {/* Affiliate Disclosure */}
              <div className="bg-yellow-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h2>
                <div className="space-y-4 text-gray-700">
                  <p>SiteRanker participates in affiliate marketing programs. This means we may earn a commission when you click on or make purchases via links on our site. This comes at no additional cost to you.</p>
                  <p>Our affiliate relationships do not influence our reviews or recommendations. We maintain editorial independence and only recommend products and services we believe provide value to our users.</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <div className="space-y-4 text-gray-700">
                  <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Excludes all representations and warranties relating to this website and its contents</li>
                    <li>Does not warrant that the functions contained in the website will be uninterrupted or error-free</li>
                    <li>Does not warrant that defects will be corrected or that this website or the server is free of viruses</li>
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
                <div className="space-y-4 text-gray-700">
                  <p>In no event shall SiteRanker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SiteRanker's website, even if SiteRanker or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                </div>
              </div>

              {/* Accuracy of Materials */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Materials</h2>
                <div className="space-y-4 text-gray-700">
                  <p>The materials appearing on SiteRanker's website could include technical, typographical, or photographic errors. SiteRanker does not warrant that any of the materials on its website are accurate, complete, or current. SiteRanker may make changes to the materials contained on its website at any time without notice.</p>
                </div>
              </div>

              {/* Modifications */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
                <div className="space-y-4 text-gray-700">
                  <p>SiteRanker may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <div className="space-y-4 text-gray-700">
                  <p>These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@siteranker.com</p>
                    <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;