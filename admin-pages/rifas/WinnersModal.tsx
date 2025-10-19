import React from 'react';
import { Raffle } from '../../types';
import { TrophyIcon } from '../../Icons';

interface WinnersModalProps {
  isOpen: boolean;
  onClose: () => void;
  raffle: Raffle | null;
}

const WinnersModal: React.FC<WinnersModalProps> = ({ isOpen, onClose, raffle }) => {
  if (!isOpen || !raffle) return null;

  const handleNotify = () => {
    alert('Notificando ganhadores...');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <div className="text-center">
            <TrophyIcon className="h-12 w-12 text-amber-500 mx-auto" />
            <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-800">Ganhadores - {raffle.title}</h2>
        </div>
        <div className="space-y-4">
            {raffle.winners && raffle.winners.length > 0 ? (
                raffle.winners.map((winner) => (
                    <div key={winner.place} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <p className="font-bold text-emerald-700">{winner.place}º Lugar</p>
                        <p className="text-gray-800 mt-1">Nome: <span className="font-semibold">{winner.buyerName}</span></p>
                        <p className="text-gray-600">Número Sorteado: <span className="font-semibold">{winner.ticketNumber}</span></p>
                    </div>
                ))
            ) : (
                <p className="text-center py-4 text-gray-500">Ainda não há ganhadores para esta rifa.</p>
            )}
        </div>
        <div className="mt-6 pt-4 border-t flex justify-between items-center">
          <button onClick={handleNotify} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50" disabled={!raffle.winners || raffle.winners.length === 0}>
            Notificar Ganhadores
          </button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnersModal;