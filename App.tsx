import React, { useState } from 'react';
// FIX: Corrected import paths to be relative.
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';

export type View = 'home' | 'faq' | 'terms' | 'about' | 'login';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = (user: string, pass: string): boolean => {
    if (user === 'ad' && pass === 'a12') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('home');
  };

  if (isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  const navigate = (newView: View) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'faq':
        return <FAQPage onNavigate={navigate} />;
      case 'terms':
        return <TermsPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'login':
        return <LoginPage onLoginAttempt={handleLogin} onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return <>{renderView()}</>;
};

export default App;