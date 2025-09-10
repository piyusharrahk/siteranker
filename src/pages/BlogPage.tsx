import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'best-website-builders-2025',
    title: 'The Ultimate Guide to Website Builders in 2025',
    excerpt: 'Discover the top website builders for 2025 and find the perfect platform for your business needs.',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Reviews'
  },
  {
    id: 2,
    slug: 'ecommerce-website-builders-comparison',
    title: 'E-commerce Website Builders: Complete Comparison',
    excerpt: 'Compare the best e-commerce website builders and learn which platform is right for your online store.',
    author: 'Mike Chen',
    date: '2025-01-12',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce'
  },
  {
    id: 3,
    slug: 'website-builder-pricing-guide',
    title: 'Website Builder Pricing: What You Need to Know',
    excerpt: 'Understanding website builder costs and finding the best value for your budget.',
    author: 'Emily Davis',
    date: '2025-01-10',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pricing'
  },
  {
    id: 4,
    slug: 'seo-tips-website-builders',
    title: 'SEO Best Practices for Website Builder Sites',
    excerpt: 'Learn how to optimize your website builder site for search engines and improve your rankings.',
    author: 'David Wilson',
    date: '2025-01-08',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO'
  },
  {
    id: 5,
    slug: 'mobile-responsive-design-tips',
    title: 'Creating Mobile-Responsive Websites with Builders',
    excerpt: 'Essential tips for ensuring your website looks great on all devices using website builders.',
    author: 'Lisa Anderson',
    date: '2025-01-05',
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design'
  },
  {
    id: 6,
    slug: 'website-security-best-practices',
    title: 'Website Security: Protecting Your Site',
    excerpt: 'Learn about website security features and how to keep your site safe from threats.',
    author: 'Tom Rodriguez',
    date: '2025-01-03',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Security'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Builder Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, reviews, and guides to help you choose the perfect website builder for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;