import React from 'react';
import { Raffle } from '../../types';

interface DrawRaffleModalProps {
  isOpen: boolean;
  onClose: () => void;
  raffle: Raffle | null;
  onDrawConfirm: (raffleId: number) => void;
}

const DrawRaffleModal: React.FC<DrawRaffleModalProps> = ({ isOpen, onClose, raffle, onDrawConfirm }) => {
  if (!isOpen || !raffle) return null;
  
  const handleConfirm = () => {
      onDrawConfirm(raffle.id);
      onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Confirmar Sorteio</h2>
        <p className="text-gray-600 mb-6">
            Você tem certeza que deseja realizar o sorteio para a rifa <strong className="text-emerald-600">{raffle.title}</strong>? Esta ação é irreversível.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg">
            Cancelar
          </button>
          <button onClick={handleConfirm} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg">
            Confirmar Sorteio
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawRaffleModal;