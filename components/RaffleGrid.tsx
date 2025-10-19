import React from 'react';
import { Raffle } from '../types';
import RaffleCard from './RaffleCard';

interface RaffleGridProps {
  raffles: Raffle[];
  onShare: (raffle: Raffle) => void;
}

const RaffleGrid: React.FC<RaffleGridProps> = ({ raffles, onShare }) => {
  return (
    <div id="raffles" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Rifas em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raffles.map(raffle => (
          <RaffleCard key={raffle.id} raffle={raffle} onShare={onShare} />
        ))}
      </div>
    </div>
  );
};

export default RaffleGrid;