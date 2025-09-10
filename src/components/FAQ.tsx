import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What's the difference between free and paid website builders?",
    answer: "Free website builders typically include the platform's branding, have limited storage, use subdomains (yoursite.platform.com), and offer basic features. Paid plans remove ads, provide custom domains, more storage, advanced features, and better customer support."
  },
  {
    question: "Can I switch from one website builder to another?",
    answer: "Switching between website builders can be challenging as most platforms don't allow direct exports. You'll typically need to rebuild your site manually on the new platform. Some builders like WordPress offer better migration options than others."
  },
  {
    question: "Which website builder is best for SEO?",
    answer: "WordPress.com and Wix offer the most comprehensive SEO features, including custom meta tags, URL structure control, and advanced SEO apps. Squarespace also provides good built-in SEO tools for most users."
  },
  {
    question: "Do I need technical skills to use a website builder?",
    answer: "Most modern website builders are designed for beginners with no coding experience. Drag-and-drop interfaces make it easy to create professional websites. However, more advanced customization may require some technical knowledge."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes, all paid website builder plans allow you to connect a custom domain. Some builders include a free domain for the first year, while others require you to purchase it separately."
  },
  {
    question: "What happens to my website if I stop paying?",
    answer: "If you stop paying for your website builder subscription, your site will typically be taken offline or revert to a free plan with limitations. Your content is usually preserved for a period, allowing you to reactivate or export if needed."
  },
  {
    question: "Can I sell products online with website builders?",
    answer: "Yes, most website builders offer e-commerce functionality. Shopify specializes in online stores, while Wix, Squarespace, and others provide built-in shopping cart features. Features and transaction fees vary between platforms."
  },
  {
    question: "How much does a website builder cost?",
    answer: "Website builder costs range from free (with limitations) to $50+ per month for advanced e-commerce plans. Most personal websites can be built for $10-20/month, while business sites typically cost $20-40/month."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Get answers to the most common questions about website builders.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-sm sm:text-base min-h-[48px] flex items-center justify-center"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;