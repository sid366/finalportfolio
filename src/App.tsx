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
        console.log('Checking authentication status...');
        
        // First check localStorage (more reliable with separate frontend/backend)
        const isLoggedInFromStorage = localStorage.getItem('isLoggedIn') === 'true';
        console.log('Local storage login status:', { isLoggedInFromStorage });
        
        if (isLoggedInFromStorage) {
          console.log('Auth confirmed from localStorage');
          setIsAuthenticated(true);
          setCheckingAuth(false);
          return;
        }
        
        // Only try the API check if localStorage failed
        console.log('No auth in localStorage, checking API');
        const response = await fetch(getApiUrl('api/auth/me'), {
          credentials: 'include', // Important for cookies
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
          }
        });
        
        console.log('Auth check response:', { status: response.status, ok: response.ok });
        setIsAuthenticated(response.ok);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    };
    
    // Run auth check immediately
    checkAuth();
    
    // Re-check auth when hash changes to admin
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'admin') {
        console.log('Hash changed to admin, re-checking auth');
        checkAuth();
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
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
      console.log('Still checking auth, showing loading...');
      return <div>Loading...</div>;
    }
    
    // For admin page, check authentication
    if (currentPage === 'admin') {
      console.log('Should render admin page?', { isAuthenticated, currentPage });
      if (isAuthenticated) {
        console.log('Rendering AdminPage component');
        return <AdminPage />;
      } else {
        console.log('Not authenticated, rendering LoginPage instead');
        return <LoginPage />;
      }
    }
    
    // For other pages, render normally
    console.log('Rendering regular page:', currentPage);
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
