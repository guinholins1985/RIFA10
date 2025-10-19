import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { View } from '../App';

interface InfoPageLayoutProps {
  onNavigate: (view: View) => void;
  title: string;
  children: React.ReactNode;
}

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ onNavigate, title, children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light-gray">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center mb-10 text-emerald-600">{title}</h1>
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg prose max-w-4xl mx-auto">
                {children}
            </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default InfoPageLayout;
