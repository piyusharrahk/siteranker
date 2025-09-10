import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const blogContent: { [key: string]: any } = {
  'best-website-builders-2025': {
    title: 'The Ultimate Guide to Website Builders in 2025',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Reviews',
    readTime: '12 min read',
    content: `
      <p>Website builders have revolutionized how we create websites, making it possible for anyone to build a professional online presence without coding knowledge. In 2025, the landscape is more competitive than ever, with platforms offering increasingly sophisticated features.</p>
      
      <h2>What Makes a Great Website Builder?</h2>
      <p>When evaluating website builders, several key factors determine their effectiveness:</p>
      <ul>
        <li><strong>Ease of Use:</strong> Intuitive drag-and-drop interfaces</li>
        <li><strong>Template Quality:</strong> Professional, modern designs</li>
        <li><strong>Customization Options:</strong> Flexibility to match your brand</li>
        <li><strong>Performance:</strong> Fast loading times and reliability</li>
        <li><strong>SEO Features:</strong> Built-in optimization tools</li>
        <li><strong>Mobile Responsiveness:</strong> Automatic mobile optimization</li>
      </ul>
      
      <h2>Top Website Builders for 2025</h2>
      <p>After extensive testing, here are our top recommendations:</p>
      
      <h3>1. Wix - Best Overall</h3>
      <p>Wix continues to lead the market with its powerful drag-and-drop editor and extensive app marketplace. The platform offers over 500 templates and supports advanced features like custom code injection.</p>
      
      <h3>2. Squarespace - Best for Design</h3>
      <p>Squarespace excels in providing stunning, award-winning templates that look professional out of the box. It's particularly popular among creative professionals and photographers.</p>
      
      <h3>3. Shopify - Best for E-commerce</h3>
      <p>For online stores, Shopify remains unmatched with its comprehensive e-commerce features, payment processing, and inventory management capabilities.</p>
      
      <h2>Making Your Decision</h2>
      <p>Choose your website builder based on your specific needs:</p>
      <ul>
        <li>Beginners should start with Wix or Site123</li>
        <li>Designers will love Squarespace or Webflow</li>
        <li>E-commerce businesses need Shopify or WooCommerce</li>
        <li>Budget-conscious users should consider Zyro or GoDaddy</li>
      </ul>
      
      <p>Remember, the best website builder is the one that meets your specific needs and grows with your business.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogContent[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Building?</h3>
            <p className="text-gray-700 mb-4">
              Check out our comprehensive comparison of the top website builders to find the perfect platform for your needs.
            </p>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Compare Website Builders
            </Link>
          </div>
        </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;