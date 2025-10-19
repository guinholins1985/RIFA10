import React from 'react';
import { INSTAGRAM_ICON, FACEBOOK_ICON } from '../Icons';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">RIFA<span className="text-amber-500">10</span></h3>
            <p className="text-gray-400 mt-2">A plataforma completa para suas rifas. Simples, segura e eficaz.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }} className="text-gray-400 hover:text-amber-500 transition-colors">FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} className="text-gray-400 hover:text-amber-500 transition-colors">Termos de Serviço</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="text-gray-400 hover:text-amber-500 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">{INSTAGRAM_ICON}</a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">{FACEBOOK_ICON}</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} RIFA10. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
