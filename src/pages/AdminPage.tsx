import React, { useState, useEffect } from 'react';
import { Users, FileText, Building2, Mail, TrendingUp, Plus, Edit, Trash2, X, Save } from 'lucide-react';
import { cmsService } from '../lib/cms';

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  
  // Modal states
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingType, setEditingType] = useState<string>('');

  // Form states
  const [brandForm, setBrandForm] = useState({
    name: '',
    slug: '',
    logo: '',
    rating: 4.0,
    price: '',
    affiliateLink: '',
    overview: '',
    bestFor: '',
    verdict: '',
    freeVersion: false,
    templates: 0,
    ecommerce: false,
    color: 'blue',
    features: [''],
    pros: [''],
    cons: [''],
    pricing: [{ plan: '', price: '', features: [''] }]
  });

  const [postForm, setPostForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'reviews',
    published: false,
    image: '',
    seoTitle: '',
    seoDescription: '',
    keywords: ['']
  });

  const [campaignForm, setCampaignForm] = useState({
    name: '',
    subject: '',
    content: '',
    status: 'draft' as 'draft' | 'sent' | 'scheduled',
    scheduledDate: ''
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, brandsData, subscribersData, contactsData, campaignsData] = await Promise.all([
          cmsService.getBlogPosts(),
          cmsService.getBrands(),
          cmsService.getEmailSubscribers(),
          cmsService.getContactSubmissions(),
          cmsService.getEmailCampaigns()
        ]);
        
        setBlogPosts(postsData);
        setBrands(brandsData);
        setSubscribers(subscribersData);
        setContacts(contactsData);
        setCampaigns(campaignsData);
      } catch (error) {
        console.error('Error loading admin data:', error);
      }
    };

    loadData();
  }, []);

  const handleAddBrand = () => {
    setEditingItem(null);
    setEditingType('');
    setBrandForm({
      name: '',
      slug: '',
      logo: '',
      rating: 4.0,
      price: '',
      affiliateLink: '',
      overview: '',
      bestFor: '',
      verdict: '',
      freeVersion: false,
      templates: 0,
      ecommerce: false,
      color: 'blue',
      features: [''],
      pros: [''],
      cons: [''],
      pricing: [{ plan: '', price: '', features: [''] }]
    });
    setShowBrandModal(true);
  };

  const handleAddPost = () => {
    setEditingItem(null);
    setEditingType('');
    setPostForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'reviews',
      published: false,
      image: '',
      seoTitle: '',
      seoDescription: '',
      keywords: ['']
    });
    setShowPostModal(true);
  };

  const handleNewCampaign = () => {
    setEditingItem(null);
    setEditingType('');
    setCampaignForm({
      name: '',
      subject: '',
      content: '',
      status: 'draft',
      scheduledDate: ''
    });
    setShowCampaignModal(true);
  };

  const handleEditBrand = (brand: any) => {
    setEditingItem(brand);
    setEditingType('brand');
    setBrandForm({
      name: brand.name || '',
      slug: brand.slug || '',
      logo: brand.logo || '',
      rating: brand.rating || 4.0,
      price: brand.price || '',
      affiliateLink: brand.affiliateLink || '',
      overview: brand.overview || '',
      bestFor: brand.bestFor || '',
      verdict: brand.verdict || '',
      freeVersion: brand.freeVersion || false,
      templates: brand.templates || 0,
      ecommerce: brand.ecommerce || false,
      color: brand.color || 'blue',
      features: brand.features || [''],
      pros: brand.pros || [''],
      cons: brand.cons || [''],
      pricing: brand.pricing || [{ plan: '', price: '', features: [''] }]
    });
    setShowBrandModal(true);
  };

  const handleEditPost = (post: any) => {
    setEditingItem(post);
    setEditingType('post');
    setPostForm({
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      author: post.author || '',
      category: post.category || 'reviews',
      published: post.published || false,
      image: post.image || '',
      seoTitle: post.seo?.title || '',
      seoDescription: post.seo?.description || '',
      keywords: post.seo?.keywords || ['']
    });
    setShowPostModal(true);
  };

  const handleDeleteBrand = (brandId: string) => {
    if (confirm('Are you sure you want to delete this brand?')) {
      cmsService.deleteBrand(brandId);
      setBrands(brands.filter(brand => brand.id !== brandId));
    }
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      cmsService.deleteBlogPost(postId);
      setBlogPosts(blogPosts.filter(post => post.id !== postId));
    }
  };

  const handleDeleteSubscriber = (subscriberId: string) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      setSubscribers(subscribers.filter(sub => sub.id !== subscriberId));
    }
  };

  const handleDeleteContact = (contactId: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(contact => contact.id !== contactId));
    }
  };

  const handleSaveBrand = () => {
    try {
      if (editingItem && editingType === 'brand') {
        // Update existing brand
        const updatedBrand = cmsService.updateBrand(editingItem.id, {
          ...brandForm,
          hero: {
            title: `${brandForm.name} Review 2025`,
            description: brandForm.overview,
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },
          active: true
        });
        if (updatedBrand) {
          setBrands(brands.map(brand => brand.id === editingItem.id ? updatedBrand : brand));
        }
      } else {
        // Create new brand
        const newBrand = cmsService.addBrand({
          ...brandForm,
          hero: {
            title: `${brandForm.name} Review 2025`,
            description: brandForm.overview,
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },
          active: true
        });
        setBrands([...brands, newBrand]);
      }
      setShowBrandModal(false);
      setEditingItem(null);
      setEditingType('');
      setBrandForm({
        name: '',
        slug: '',
        logo: '',
        rating: 4.0,
        price: '',
        affiliateLink: '',
        overview: '',
        bestFor: '',
        verdict: '',
        freeVersion: false,
        templates: 0,
        ecommerce: false,
        color: 'blue',
        features: [''],
        pros: [''],
        cons: [''],
        pricing: [{ plan: '', price: '', features: [''] }]
      });
    } catch (error) {
      console.error('Error saving brand:', error);
    }
  };

  const handleSavePost = () => {
    try {
      if (editingItem && editingType === 'post') {
        // Update existing post
        const updatedPost = cmsService.updateBlogPost(editingItem.id, {
          ...postForm,
          seo: {
            title: postForm.seoTitle || postForm.title,
            description: postForm.seoDescription || postForm.excerpt,
            keywords: postForm.keywords.filter(k => k.trim() !== '')
          }
        });
        if (updatedPost) {
          setBlogPosts(blogPosts.map(post => post.id === editingItem.id ? updatedPost : post));
        }
      } else {
        // Create new post
        const newPost = cmsService.addBlogPost({
          ...postForm,
          date: new Date().toISOString().split('T')[0],
          seo: {
            title: postForm.seoTitle || postForm.title,
            description: postForm.seoDescription || postForm.excerpt,
            keywords: postForm.keywords.filter(k => k.trim() !== '')
          }
        });
        setBlogPosts([newPost, ...blogPosts]);
      }
      setShowPostModal(false);
      setEditingItem(null);
      setEditingType('');
      setPostForm({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        author: '',
        category: 'reviews',
        published: false,
        image: '',
        seoTitle: '',
        seoDescription: '',
        keywords: ['']
      });
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleSaveCampaign = () => {
    try {
      const newCampaign = cmsService.addEmailCampaign({
        ...campaignForm,
        recipients: subscribers.map(sub => sub.email)
      });
      setCampaigns([...campaigns, newCampaign]);
      setShowCampaignModal(false);
      setCampaignForm({
        name: '',
        subject: '',
        content: '',
        status: 'draft',
        scheduledDate: ''
      });
    } catch (error) {
      console.error('Error saving campaign:', error);
    }
  };

  const addArrayField = (formSetter: any, field: string, currentForm: any) => {
    formSetter({
      ...currentForm,
      [field]: [...currentForm[field], '']
    });
  };

  const updateArrayField = (formSetter: any, field: string, index: number, value: string, currentForm: any) => {
    const newArray = [...currentForm[field]];
    newArray[index] = value;
    formSetter({
      ...currentForm,
      [field]: newArray
    });
  };

  const removeArrayField = (formSetter: any, field: string, index: number, currentForm: any) => {
    const newArray = currentForm[field].filter((_: any, i: number) => i !== index);
    formSetter({
      ...currentForm,
      [field]: newArray
    });
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Blog Posts</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Building2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Brands</p>
              <p className="text-2xl font-bold text-gray-900">{brands.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Subscribers</p>
              <p className="text-2xl font-bold text-gray-900">{subscribers.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Contacts</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Blog Posts</h3>
          <div className="space-y-3">
            {blogPosts.slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Brands</h3>
          <div className="space-y-3">
            {brands.slice(0, 5).map((brand, index) => (
              <div key={brand.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{brand.name}</p>
                    <p className="text-sm text-gray-500">{brand.overview?.substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{brand.price}</p>
                  <p className="text-sm text-gray-500">{brand.freeVersion ? 'Free tier' : 'Paid only'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogPosts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
        <button 
          onClick={handleAddPost}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500">{post.excerpt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleEditPost(post)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBrands = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Brands</h2>
        <button 
          onClick={handleAddBrand}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Brand
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEditBrand(brand)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDeleteBrand(brand.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{brand.overview?.substring(0, 100)}...</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Price:</span>
                <span className="font-medium">{brand.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Free Version:</span>
                <span className={brand.freeVersion ? 'text-green-600' : 'text-red-600'}>
                  {brand.freeVersion ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">E-commerce:</span>
                <span className={brand.ecommerce ? 'text-green-600' : 'text-red-600'}>
                  {brand.ecommerce ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Templates:</span>
                <span className="font-medium">{brand.templates}+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSubscribers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h2>
        <button 
          onClick={handleNewCampaign}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscribed Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(subscriber.subscribeDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleDeleteSubscriber(subscriber.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(contact.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => cmsService.markContactAsRead(contact.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleDeleteContact(contact.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'posts':
        return renderBlogPosts();
      case 'brands':
        return renderBrands();
      case 'subscribers':
        return renderSubscribers();
      case 'contacts':
        return renderContacts();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          
          <nav className="mt-6">
            <div className="px-3">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 ${
                  activeTab === 'dashboard'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                Dashboard
              </button>
              
              <button
                onClick={() => setActiveTab('posts')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 ${
                  activeTab === 'posts'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Blog Posts
              </button>
              
              <button
                onClick={() => setActiveTab('brands')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 ${
                  activeTab === 'brands'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-5 h-5 mr-3" />
                Brands
              </button>
              
              <button
                onClick={() => setActiveTab('subscribers')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 ${
                  activeTab === 'subscribers'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Subscribers
              </button>
              
              <button
                onClick={() => setActiveTab('contacts')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 ${
                  activeTab === 'contacts'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Mail className="w-5 h-5 mr-3" />
                Contacts
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>

      {/* Brand Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">
                {editingItem && editingType === 'brand' ? 'Edit Brand' : 'Add New Brand'}
              </h3>
              <button onClick={() => setShowBrandModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                  <input
                    type="text"
                    value={brandForm.name}
                    onChange={(e) => setBrandForm({...brandForm, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Wix"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logo (Emoji)</label>
                  <input
                    type="text"
                    value={brandForm.logo}
                    onChange={(e) => setBrandForm({...brandForm, logo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="🎨"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={brandForm.rating}
                    onChange={(e) => setBrandForm({...brandForm, rating: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input
                    type="text"
                    value={brandForm.price}
                    onChange={(e) => setBrandForm({...brandForm, price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="From $14/month"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Templates Count</label>
                  <input
                    type="number"
                    value={brandForm.templates}
                    onChange={(e) => setBrandForm({...brandForm, templates: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
                  <select
                    value={brandForm.color}
                    onChange={(e) => setBrandForm({...brandForm, color: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="teal">Teal</option>
                    <option value="pink">Pink</option>
                    <option value="indigo">Indigo</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Affiliate Link</label>
                <input
                  type="url"
                  value={brandForm.affiliateLink}
                  onChange={(e) => setBrandForm({...brandForm, affiliateLink: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/?utm_source=siteranker"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Overview</label>
                <textarea
                  value={brandForm.overview}
                  onChange={(e) => setBrandForm({...brandForm, overview: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the brand..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Best For</label>
                <textarea
                  value={brandForm.bestFor}
                  onChange={(e) => setBrandForm({...brandForm, bestFor: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Who this brand is perfect for..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Verdict</label>
                <textarea
                  value={brandForm.verdict}
                  onChange={(e) => setBrandForm({...brandForm, verdict: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Final verdict about this brand..."
                />
              </div>
              
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={brandForm.freeVersion}
                    onChange={(e) => setBrandForm({...brandForm, freeVersion: e.target.checked})}
                    className="mr-2"
                  />
                  Free Version Available
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={brandForm.ecommerce}
                    onChange={(e) => setBrandForm({...brandForm, ecommerce: e.target.checked})}
                    className="mr-2"
                  />
                  E-commerce Support
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                {brandForm.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateArrayField(setBrandForm, 'features', index, e.target.value, brandForm)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Feature name"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayField(setBrandForm, 'features', index, brandForm)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayField(setBrandForm, 'features', brandForm)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + Add Feature
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pros</label>
                  {brandForm.pros.map((pro, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={pro}
                        onChange={(e) => updateArrayField(setBrandForm, 'pros', index, e.target.value, brandForm)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Pro point"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayField(setBrandForm, 'pros', index, brandForm)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField(setBrandForm, 'pros', brandForm)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Pro
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cons</label>
                  {brandForm.cons.map((con, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={con}
                        onChange={(e) => updateArrayField(setBrandForm, 'cons', index, e.target.value, brandForm)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Con point"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayField(setBrandForm, 'cons', index, brandForm)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField(setBrandForm, 'cons', brandForm)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Con
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t">
              <button
                onClick={() => setShowBrandModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBrand}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingItem && editingType === 'brand' ? 'Update Brand' : 'Save Brand'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">
                {editingItem && editingType === 'post' ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h3>
              <button onClick={() => setShowPostModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={postForm.title}
                    onChange={(e) => setPostForm({...postForm, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Post title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={postForm.author}
                    onChange={(e) => setPostForm({...postForm, author: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Author name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={postForm.category}
                    onChange={(e) => setPostForm({...postForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="reviews">Reviews</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="pricing">Pricing</option>
                    <option value="guides">Guides</option>
                    <option value="comparisons">Comparisons</option>
                    <option value="tips">Tips</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                  <input
                    type="url"
                    value={postForm.image}
                    onChange={(e) => setPostForm({...postForm, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://images.pexels.com/..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={postForm.excerpt}
                  onChange={(e) => setPostForm({...postForm, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the post..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={postForm.content}
                  onChange={(e) => setPostForm({...postForm, content: e.target.value})}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your post content here... (HTML supported)"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                  <input
                    type="text"
                    value={postForm.seoTitle}
                    onChange={(e) => setPostForm({...postForm, seoTitle: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="SEO optimized title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
                  <input
                    type="text"
                    value={postForm.seoDescription}
                    onChange={(e) => setPostForm({...postForm, seoDescription: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Meta description"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                {postForm.keywords.map((keyword, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => updateArrayField(setPostForm, 'keywords', index, e.target.value, postForm)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Keyword"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayField(setPostForm, 'keywords', index, postForm)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayField(setPostForm, 'keywords', postForm)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + Add Keyword
                </button>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={postForm.published}
                    onChange={(e) => setPostForm({...postForm, published: e.target.checked})}
                    className="mr-2"
                  />
                  Publish immediately
                </label>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t">
              <button
                onClick={() => setShowPostModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePost}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingItem && editingType === 'post' ? 'Update Post' : 'Save Post'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Campaign Modal */}
      {showCampaignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">Create Email Campaign</h3>
              <button onClick={() => setShowCampaignModal(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                <input
                  type="text"
                  value={campaignForm.name}
                  onChange={(e) => setCampaignForm({...campaignForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Campaign name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
                <input
                  type="text"
                  value={campaignForm.subject}
                  onChange={(e) => setCampaignForm({...campaignForm, subject: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Content</label>
                <textarea
                  value={campaignForm.content}
                  onChange={(e) => setCampaignForm({...campaignForm, content: e.target.value})}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email content (HTML supported)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={campaignForm.status}
                  onChange={(e) => setCampaignForm({...campaignForm, status: e.target.value as 'draft' | 'sent' | 'scheduled'})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="sent">Send Now</option>
                </select>
              </div>
              
              {campaignForm.status === 'scheduled' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scheduled Date</label>
                  <input
                    type="datetime-local"
                    value={campaignForm.scheduledDate}
                    onChange={(e) => setCampaignForm({...campaignForm, scheduledDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Recipients:</strong> {subscribers.length} subscribers will receive this campaign.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t">
              <button
                onClick={() => setShowCampaignModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCampaign}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Campaign</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;