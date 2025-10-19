import React from 'react';
import { View } from '../App';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => onNavigate('home')}>
          RIFA<span className="text-amber-500">10</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">FAQ</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Termos</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Sobre</a>
        </nav>
        <button onClick={() => onNavigate('login')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
