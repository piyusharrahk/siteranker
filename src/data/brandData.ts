export interface BrandData {
  name: string;
  slug: string;
  logo: string;
  rating: number;
  price: string;
  affiliateLink: string;
  hero: {
    title: string;
    description: string;
    image: string;
  };
  overview: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: Array<{
    plan: string;
    price: string;
    features: string[];
  }>;
  bestFor: string;
  verdict: string;
  freeVersion: boolean;
  templates: number;
  ecommerce: boolean;
  color: string;
}

export const brandData: { [key: string]: BrandData } = {
  wix: {
    name: 'Wix',
    slug: 'wix',
    logo: '🎨',
    rating: 4.8,
    price: 'From $14/month',
    affiliateLink: 'https://www.wix.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Wix Review 2025: The Ultimate Drag & Drop Website Builder',
      description: 'Discover why Wix is the top choice for beginners and creative professionals with our comprehensive review.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Wix is one of the most popular website builders in the world, known for its intuitive drag-and-drop editor and extensive template library. With over 200 million users worldwide, Wix has established itself as a leader in the website building space.',
    features: [
      'Drag & Drop Editor',
      '500+ Professional Templates',
      'App Market with 300+ Apps',
      'Advanced SEO Tools',
      'Mobile Optimization',
      'E-commerce Capabilities',
      'Custom Domain',
      'SSL Certificate',
      'Analytics & Reports',
      '24/7 Customer Support'
    ],
    pros: [
      'Extremely user-friendly interface',
      'Massive template library with professional designs',
      'Strong app ecosystem for extended functionality',
      'Excellent mobile editor',
      'Good SEO capabilities',
      'Reliable hosting and security'
    ],
    cons: [
      'Cannot switch templates after publishing',
      'Ads displayed on free plan',
      'Limited export options',
      'Can become slow with many apps',
      'Template customization can be overwhelming'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['Wix Branding', '500MB Storage', 'Wix Subdomain'] },
      { plan: 'Combo', price: '$14', features: ['Remove Ads', '3GB Storage', 'Free Domain', '30min Video'] },
      { plan: 'Unlimited', price: '$18', features: ['Unlimited Bandwidth', '10GB Storage', 'Site Booster App'] },
      { plan: 'Pro', price: '$23', features: ['20GB Storage', 'Professional Logo', 'Social Media Logo Files'] },
      { plan: 'VIP', price: '$39', features: ['35GB Storage', 'Priority Support', 'Professional Review'] }
    ],
    bestFor: 'Beginners, small businesses, creative professionals, and anyone who wants a beautiful website without coding.',
    verdict: 'Wix is an excellent choice for beginners and creative professionals who want a powerful, easy-to-use website builder with extensive customization options.',
    freeVersion: true,
    templates: 500,
    ecommerce: true,
    color: 'blue'
  },
  squarespace: {
    name: 'Squarespace',
    slug: 'squarespace',
    logo: '📐',
    rating: 4.7,
    price: 'From $12/month',
    affiliateLink: 'https://www.squarespace.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Squarespace Review 2025: Premium Design Meets Functionality',
      description: 'Explore why Squarespace is the go-to choice for designers and creative professionals.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Squarespace is renowned for its stunning, award-winning templates and powerful built-in features. It\'s the preferred choice for creative professionals, photographers, and businesses that prioritize design aesthetics.',
    features: [
      'Award-winning Templates',
      'Built-in Analytics',
      'E-commerce Tools',
      'Mobile Editor',
      'SEO Features',
      'Social Media Integration',
      'Custom CSS',
      'Image Editor',
      'Blogging Platform',
      'Email Campaigns'
    ],
    pros: [
      'Stunning, professional templates',
      'Great for portfolios and creative sites',
      'Strong blogging features',
      'Built-in analytics and SEO',
      'Excellent mobile responsiveness',
      'High-quality customer support'
    ],
    cons: [
      'Steeper learning curve than competitors',
      'Limited third-party integrations',
      'Higher pricing than alternatives',
      'Less flexibility in design customization',
      'No free plan available'
    ],
    pricing: [
      { plan: 'Personal', price: '$12', features: ['Free Domain', 'SSL Certificate', 'SEO Features'] },
      { plan: 'Business', price: '$18', features: ['Professional Email', 'Promotional Pop-ups', 'Advanced Analytics'] },
      { plan: 'Basic Commerce', price: '$26', features: ['Sell Unlimited Products', '3% Transaction Fee', 'Powerful E-commerce'] },
      { plan: 'Advanced Commerce', price: '$40', features: ['Advanced Shipping', 'Subscriptions', 'Advanced Discounting'] }
    ],
    bestFor: 'Designers, photographers, artists, creative professionals, and businesses that prioritize aesthetics.',
    verdict: 'Squarespace is perfect for users who want beautiful, professional websites and don\'t mind paying a premium for quality design and features.',
    freeVersion: false,
    templates: 120,
    ecommerce: true,
    color: 'purple'
  },
  wordpress: {
    name: 'WordPress.com',
    slug: 'wordpress',
    logo: '📝',
    rating: 4.6,
    price: 'From $4/month',
    affiliateLink: 'https://wordpress.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'WordPress.com Review 2025: The Ultimate Blogging Platform',
      description: 'Discover why WordPress.com remains the top choice for bloggers and content creators worldwide.',
      image: 'https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'WordPress.com is the hosted version of the world\'s most popular content management system. It offers the power of WordPress without the technical complexity, making it perfect for bloggers and content-focused websites.',
    features: [
      'Thousands of Themes',
      'Plugin Library',
      'SEO Optimization',
      'Custom Code Support',
      'Multi-site Management',
      'Advanced Analytics',
      'Social Media Integration',
      'Comment System',
      'Media Library',
      'Mobile Apps'
    ],
    pros: [
      'Extremely flexible and customizable',
      'Best-in-class blogging features',
      'Strong SEO capabilities',
      'Large community and resources',
      'Scalable from personal to enterprise',
      'Open source foundation'
    ],
    cons: [
      'More complex setup than drag-and-drop builders',
      'Requires some technical knowledge',
      'Security management needed',
      'Can be overwhelming for beginners',
      'Premium features require higher plans'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['WordPress.com Subdomain', '3GB Storage', 'Basic Themes'] },
      { plan: 'Personal', price: '$4', features: ['Custom Domain', 'Email Support', 'Remove Ads'] },
      { plan: 'Premium', price: '$8', features: ['Advanced Design', 'VideoPress', 'Premium Themes'] },
      { plan: 'Business', price: '$25', features: ['Install Plugins', 'Upload Themes', 'Google Analytics'] },
      { plan: 'Commerce', price: '$45', features: ['WooCommerce', 'Premium Extensions', 'Live Chat'] }
    ],
    bestFor: 'Bloggers, content creators, businesses needing flexibility, and users who want to scale.',
    verdict: 'WordPress.com is ideal for users who prioritize content creation and want the flexibility to grow their site with advanced features.',
    freeVersion: true,
    templates: 1000,
    ecommerce: true,
    color: 'green'
  },
  shopify: {
    name: 'Shopify',
    slug: 'shopify',
    logo: '🛍️',
    rating: 4.9,
    price: 'From $29/month',
    affiliateLink: 'https://www.shopify.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Shopify Review 2025: The E-commerce Powerhouse',
      description: 'Learn why Shopify is the undisputed leader in e-commerce website building and online store management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Shopify is the world\'s leading e-commerce platform, powering over 1 million businesses worldwide. It\'s specifically designed for online stores and provides everything needed to sell products online.',
    features: [
      'E-commerce Focused Design',
      'Payment Processing',
      'Inventory Management',
      'App Store with 6000+ Apps',
      'Multi-channel Selling',
      'Abandoned Cart Recovery',
      'Analytics & Reports',
      'Mobile POS',
      'Dropshipping Support',
      '24/7 Support'
    ],
    pros: [
      'Best-in-class e-commerce features',
      'Excellent payment processing options',
      'Highly scalable platform',
      'Strong app ecosystem',
      'Great mobile experience',
      'Reliable hosting and security'
    ],
    cons: [
      'Expensive for basic websites',
      'Transaction fees on external payments',
      'Limited blogging capabilities',
      'Monthly costs can add up',
      'Customization requires coding knowledge'
    ],
    pricing: [
      { plan: 'Basic Shopify', price: '$29', features: ['Online Store', '2 Staff Accounts', '4 Inventory Locations'] },
      { plan: 'Shopify', price: '$79', features: ['5 Staff Accounts', 'Professional Reports', 'Gift Cards'] },
      { plan: 'Advanced Shopify', price: '$299', features: ['15 Staff Accounts', 'Advanced Report Builder', 'Third-party Rates'] }
    ],
    bestFor: 'Online stores, e-commerce businesses, dropshippers, and anyone serious about selling products online.',
    verdict: 'Shopify is the clear winner for e-commerce websites, offering unmatched features for online selling and business growth.',
    freeVersion: false,
    templates: 100,
    ecommerce: true,
    color: 'green'
  },
  webflow: {
    name: 'Webflow',
    slug: 'webflow',
    logo: '⚡',
    rating: 4.5,
    price: 'From $12/month',
    affiliateLink: 'https://webflow.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Webflow Review 2025: Professional Web Design Without Code',
      description: 'Discover how Webflow empowers designers to create professional websites with visual development tools.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Webflow is a visual web development platform that allows designers to build responsive websites without writing code. It combines the power of HTML, CSS, and JavaScript with an intuitive visual interface.',
    features: [
      'Visual CSS Editor',
      'CMS Integration',
      'Responsive Design Tools',
      'Custom Code Support',
      'SEO Controls',
      'Form Builder',
      'Animation Tools',
      'White-label Client Billing',
      'Team Collaboration',
      'Version Control'
    ],
    pros: [
      'Professional design control',
      'Clean, semantic code output',
      'Great for web design agencies',
      'Powerful animation capabilities',
      'Strong CMS features',
      'No coding required for complex designs'
    ],
    cons: [
      'Steep learning curve for beginners',
      'Expensive for multiple sites',
      'Limited e-commerce features',
      'Can be overwhelming for simple sites',
      'Requires design knowledge'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['2 Projects', 'Webflow Subdomain', '50 CMS Items'] },
      { plan: 'Basic', price: '$12', features: ['Custom Domain', 'Form Submissions', '500 Form Submissions'] },
      { plan: 'CMS', price: '$16', features: ['2000 CMS Items', 'Search Functionality', '1000 Form Submissions'] },
      { plan: 'Business', price: '$36', features: ['10000 CMS Items', 'Site Search', 'Advanced Interactions'] }
    ],
    bestFor: 'Web designers, agencies, freelancers, and businesses needing custom design without coding.',
    verdict: 'Webflow is perfect for designers who want complete creative control and professional results without writing code.',
    freeVersion: true,
    templates: 50,
    ecommerce: false,
    color: 'indigo'
  },
  weebly: {
    name: 'Weebly',
    slug: 'weebly',
    logo: '🔧',
    rating: 4.3,
    price: 'From $6/month',
    affiliateLink: 'https://www.weebly.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Weebly Review 2025: Simple Website Building Made Easy',
      description: 'Explore how Weebly makes website creation accessible for small businesses and beginners.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Weebly is a user-friendly website builder owned by Square, focusing on simplicity and ease of use. It\'s designed for small businesses and individuals who want to get online quickly without complexity.',
    features: [
      'Simple Drag & Drop Editor',
      'E-commerce Ready',
      'SEO Features',
      'Mobile Responsive',
      'App Center',
      'Square Integration',
      'Lead Capture',
      'Site Statistics',
      'Password Protection',
      'HD Video & Audio'
    ],
    pros: [
      'Very beginner-friendly interface',
      'Good value for money',
      'Decent template selection',
      'Integrated with Square ecosystem',
      'Reliable hosting',
      'Good customer support'
    ],
    cons: [
      'Limited customization options',
      'Basic design features',
      'Fewer templates than competitors',
      'Limited advanced features',
      'Owned by Square (less focus on web building)'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['Weebly Subdomain', 'Square Branding', '500MB Storage'] },
      { plan: 'Personal', price: '$6', features: ['Custom Domain', 'Remove Ads', 'Search Engine Indexing'] },
      { plan: 'Professional', price: '$12', features: ['Site Search', 'HD Video', 'Password Protection'] },
      { plan: 'Performance', price: '$26', features: ['Advanced E-commerce', 'Shipping Calculator', 'Inventory Management'] }
    ],
    bestFor: 'Small businesses, beginners, and users who want simple website creation with Square integration.',
    verdict: 'Weebly is a solid choice for users who prioritize simplicity and don\'t need advanced customization features.',
    freeVersion: true,
    templates: 50,
    ecommerce: true,
    color: 'blue'
  },
  godaddy: {
    name: 'GoDaddy',
    slug: 'godaddy',
    logo: '🌐',
    rating: 4.1,
    price: 'From $5.99/month',
    affiliateLink: 'https://www.godaddy.com/websites/website-builder?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'GoDaddy Website Builder Review 2025: Quick Business Websites',
      description: 'Learn how GoDaddy\'s AI-powered website builder helps businesses get online fast.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'GoDaddy Website Builder is designed for speed and simplicity, using AI to help businesses create websites quickly. As part of the world\'s largest domain registrar, it offers integrated web services.',
    features: [
      'AI Design Assistant',
      'Marketing Tools',
      'Online Appointments',
      'Social Media Integration',
      'SEO Wizard',
      'Mobile Optimization',
      'E-commerce Tools',
      'Email Marketing',
      'Analytics',
      'Customer Support'
    ],
    pros: [
      'Very quick setup process',
      'Good marketing and business features',
      'Affordable pricing',
      'Integrated domain and hosting',
      'AI-powered design suggestions',
      'Good for local businesses'
    ],
    cons: [
      'Limited design flexibility',
      'Basic template selection',
      'Heavy upselling pressure',
      'Less customization than competitors',
      'Template quality varies'
    ],
    pricing: [
      { plan: 'Basic', price: '$5.99', features: ['Free Domain', 'Professional Email', 'SEO Wizard'] },
      { plan: 'Standard', price: '$9.99', features: ['PayPal Integration', 'Appointment Scheduling', 'Social Media'] },
      { plan: 'Premium', price: '$14.99', features: ['Online Store', 'Email Marketing', 'Advanced SEO'] },
      { plan: 'Commerce', price: '$24.99', features: ['Advanced E-commerce', 'Abandoned Cart', 'Product Reviews'] }
    ],
    bestFor: 'Small businesses, local services, and users who want quick website setup with business features.',
    verdict: 'GoDaddy is good for businesses that need to get online quickly and want integrated web services, but lacks design flexibility.',
    freeVersion: false,
    templates: 100,
    ecommerce: true,
    color: 'orange'
  },
  zyro: {
    name: 'Zyro',
    slug: 'zyro',
    logo: '🚀',
    rating: 4.2,
    price: 'From $2.90/month',
    affiliateLink: 'https://zyro.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Zyro Review 2025: AI-Powered Website Building on a Budget',
      description: 'Discover how Zyro combines artificial intelligence with affordable pricing for modern websites.',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Zyro is a modern website builder that leverages AI technology to help users create websites quickly and affordably. It focuses on providing professional results at budget-friendly prices.',
    features: [
      'AI Website Builder',
      'AI Logo Maker',
      'AI Writer',
      'Heatmap Tool',
      'E-commerce Features',
      'SEO Tools',
      'Mobile Editor',
      'Custom Domain',
      'SSL Certificate',
      'Analytics'
    ],
    pros: [
      'Very affordable pricing',
      'AI-powered design and content tools',
      'Good website performance',
      'Modern, clean templates',
      'Easy to use interface',
      'Good value for money'
    ],
    cons: [
      'Limited template selection',
      'Relatively new to the market',
      'Basic customization options',
      'Fewer integrations than competitors',
      'Limited advanced features'
    ],
    pricing: [
      { plan: 'Website', price: '$2.90', features: ['Free Domain', 'SSL Certificate', 'Zyro Branding'] },
      { plan: 'Business', price: '$3.90', features: ['Remove Branding', 'Google Analytics', 'Facebook Pixel'] },
      { plan: 'Online Store', price: '$9.90', features: ['E-commerce Features', 'Inventory Management', 'Abandoned Cart'] }
    ],
    bestFor: 'Budget-conscious users, small businesses, and anyone who wants AI-assisted website creation.',
    verdict: 'Zyro offers excellent value for money with AI-powered features, perfect for users on a tight budget who still want professional results.',
    freeVersion: false,
    templates: 80,
    ecommerce: true,
    color: 'teal'
  },
  site123: {
    name: 'Site123',
    slug: 'site123',
    logo: '🎯',
    rating: 4.0,
    price: 'From $5.80/month',
    affiliateLink: 'https://www.site123.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Site123 Review 2025: Website Building Made Simple',
      description: 'Learn how Site123 makes website creation accessible for complete beginners with its structured approach.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Site123 takes a unique approach to website building by using a structured, step-by-step process instead of drag-and-drop. It\'s designed for users who want simplicity above all else.',
    features: [
      'Structured Website Creation',
      'Multilingual Support',
      'App Market',
      'SEO Tools',
      'E-commerce Ready',
      'Mobile Responsive',
      'Free Hosting',
      'SSL Certificate',
      'Live Chat Support',
      'Analytics'
    ],
    pros: [
      'Extremely simple to use',
      'Great multilingual capabilities',
      'Quick website setup',
      'Good customer support',
      'Free plan available',
      'No design skills required'
    ],
    cons: [
      'Very limited customization options',
      'Basic design flexibility',
      'Limited scalability',
      'Fewer features than competitors',
      'Template selection is limited'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['Site123 Subdomain', '250MB Storage', 'Site123 Ads'] },
      { plan: 'Premium', price: '$5.80', features: ['Custom Domain', 'Remove Ads', '1GB Storage'] },
      { plan: 'Professional', price: '$12.80', features: ['5GB Storage', 'Advanced SEO', 'Priority Support'] }
    ],
    bestFor: 'Complete beginners, users who want maximum simplicity, and multilingual websites.',
    verdict: 'Site123 is perfect for users who prioritize simplicity over customization and want to get online with minimal effort.',
    freeVersion: true,
    templates: 180,
    ecommerce: true,
    color: 'red'
  },
  jimdo: {
    name: 'Jimdo',
    slug: 'jimdo',
    logo: '🎭',
    rating: 3.9,
    price: 'From $9/month',
    affiliateLink: 'https://www.jimdo.com/?utm_source=siteranker&utm_medium=affiliate',
    hero: {
      title: 'Jimdo Review 2025: Mobile-First Website Creation',
      description: 'Explore how Jimdo\'s mobile-first approach and AI builder cater to modern web users.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    overview: 'Jimdo is a German website builder that emphasizes mobile-first design and AI-powered website creation. It offers both AI-assisted and traditional building methods.',
    features: [
      'AI Website Builder (Dolphin)',
      'Mobile-First Editor',
      'SEO Assistant',
      'Online Store',
      'Blog Platform',
      'Social Media Integration',
      'Analytics',
      'Custom Domain',
      'SSL Certificate',
      'GDPR Compliance'
    ],
    pros: [
      'Strong mobile-first approach',
      'AI-powered website creation',
      'GDPR compliant (European privacy)',
      'Good for mobile editing',
      'Clean, modern designs',
      'Multilingual support'
    ],
    cons: [
      'Limited design control',
      'Smaller template selection',
      'Less popular than competitors',
      'Limited third-party integrations',
      'Higher pricing for features'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: ['Jimdo Subdomain', '500MB Storage', 'Jimdo Branding'] },
      { plan: 'Start', price: '$9', features: ['Custom Domain', 'Remove Ads', '5GB Storage'] },
      { plan: 'Grow', price: '$15', features: ['SEO Plus', 'Premium Support', '15GB Storage'] },
      { plan: 'Unlimited', price: '$39', features: ['Unlimited Storage', 'Professional Design', 'Priority Support'] }
    ],
    bestFor: 'Mobile-focused businesses, European users needing GDPR compliance, and users who prefer AI-assisted design.',
    verdict: 'Jimdo is a solid choice for users who prioritize mobile design and European privacy standards, though it lacks the features of larger competitors.',
    freeVersion: true,
    templates: 40,
    ecommerce: true,
    color: 'pink'
  }
};