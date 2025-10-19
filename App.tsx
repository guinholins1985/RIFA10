import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import HomePage from './HomePage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import { USERS } from './constants';
import { CurrentUser, User } from './types';


export type View = 'home' | 'faq' | 'terms' | 'about' | 'login';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const handleLogin = (email: string, pass: string): boolean => {
    const user = USERS.find(u => u.email === email && u.password === pass);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('home');
  };
  
  if (currentUser) {
    if (currentUser.role === 'Admin') {
      return <AdminDashboard onLogout={handleLogout} currentUser={currentUser} />;
    }
    if (currentUser.role === 'User') {
      return <UserDashboard onLogout={handleLogout} currentUser={currentUser} />;
    }
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