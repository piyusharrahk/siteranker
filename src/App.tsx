import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requireAdmin>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;