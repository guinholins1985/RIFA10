import React, { useState, useMemo } from 'react';
import { View } from './App';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import RaffleGrid from './components/RaffleGrid';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { RAFFLES } from './constants';

interface HomePageProps {
  onNavigate: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 6;
  const categories = useMemo(() => ['Todas', ...Array.from(new Set(RAFFLES.map(r => r.category)))], []);

  const filteredRaffles = useMemo(() => {
    return RAFFLES
      .filter(raffle => selectedCategory === 'Todas' || raffle.category === selectedCategory)
      .filter(raffle => raffle.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredRaffles.length / itemsPerPage);
  const paginatedRaffles = filteredRaffles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-light-gray">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow">
        <Hero />
        <FilterBar 
            categories={categories.slice(1)} 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSearch={setSearchTerm}
        />
        <RaffleGrid raffles={paginatedRaffles} />
        {totalPages > 1 && <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
