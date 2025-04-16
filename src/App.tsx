import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { getApiUrl } from './utils/api';

export type PageType = 'home' | 'portfolio' | 'contact' | 'about' | 'project' | 'admin' | 'login';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [projectId, setProjectId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch(getApiUrl('api/auth/me'), {
          credentials: 'include' // Important for cookies
        });
        
        setIsAuthenticated(response.ok);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    };
    
    checkAuth();
  }, []);

  useEffect(() => {
    // Get the hash from the URL
    const hashHandler = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Check if it's a project detail page
      if (hash.startsWith('project/')) {
        const id = hash.split('/')[1];
        setCurrentPage('project');
        setProjectId(id);
        return;
      }
      
      // Check for main pages
      if (hash && (hash === 'home' || hash === 'portfolio' || hash === 'contact' || hash === 'about' || hash === 'admin' || hash === 'login')) {
        setCurrentPage(hash as PageType);
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', hashHandler);
    // Check on initial load
    hashHandler();

    return () => {
      window.removeEventListener('hashchange', hashHandler);
    };
  }, []);

  const renderPage = () => {
    // If still checking authentication status, return loading
    if (checkingAuth && currentPage === 'admin') {
      return <div>Loading...</div>;
    }
    
    // For admin page, check authentication
    if (currentPage === 'admin') {
      return isAuthenticated ? <AdminPage /> : <LoginPage />;
    }
    
    // For other pages, render normally
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'project':
        return <ProjectDetailPage projectId={projectId || undefined} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout currentPage={currentPage}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
