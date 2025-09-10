import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Cookie } from 'lucide-react';

const PrivacyPage: React.FC = () => {
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
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-12">
              {/* Information We Collect */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us through our contact form</li>
                    <li>Create an account or use our services</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p>This may include your name, email address, phone number, and any other information you choose to provide.</p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Send you newsletters and marketing communications (with your consent)</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information Sharing and Disclosure</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                    <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                  </ul>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Cookie className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Cookies and Tracking Technologies</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our website functionality</li>
                  </ul>
                  <p>You can control cookies through your browser settings, but disabling cookies may affect website functionality.</p>
                </div>
              </div>

              {/* Email Communications */}
              <div className="bg-red-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Email Communications</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>If you subscribe to our newsletter or marketing emails:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We will only send you emails you have consented to receive</li>
                    <li>You can unsubscribe at any time using the link in our emails</li>
                    <li>We may still send you transactional emails related to your account or services</li>
                    <li>We do not share your email address with third parties for marketing purposes</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Rectify inaccurate personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict processing of your personal information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@siteranker.com</p>
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

export default PrivacyPage;