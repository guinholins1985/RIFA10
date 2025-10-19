import React from 'react';
import { Raffle } from '../types';

interface RaffleCardProps {
  raffle: Raffle;
}

const RaffleCard: React.FC<RaffleCardProps> = ({ raffle }) => {
  const progress = Math.min((raffle.raisedAmount / raffle.goalAmount) * 100, 100);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:transform hover:-translate-y-2">
      <img src={raffle.imageUrl} alt={raffle.title} className="w-full h-56 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full self-start">{raffle.category}</span>
        <h3 className="text-lg font-bold text-gray-800 my-3 h-14">{raffle.title}</h3>
        
        <div className="mb-4 mt-auto">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{progress.toFixed(0)}% Atingido</span>
                <span className="font-semibold">Meta: R$ {raffle.goalAmount.toLocaleString('pt-BR')}</span>
            </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-800 pt-4 border-t border-gray-100">
            <span className="font-bold text-emerald-600">R$ {raffle.ticketPrice.toFixed(2)}</span>
            <span className="font-medium">{raffle.daysLeft} dias restantes</span>
        </div>
        
        <button className="w-full mt-4 bg-amber-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-amber-600 transition-colors duration-300">
          Participar Agora
        </button>
      </div>
    </div>
  );
};

export default RaffleCard;
