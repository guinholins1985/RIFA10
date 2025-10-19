import React from 'react';
import { Raffle } from '../../types';

interface RaffleParticipantsModalProps {
  isOpen: boolean;
  onClose: () => void;
  raffle: Raffle | null;
}

const RaffleParticipantsModal: React.FC<RaffleParticipantsModalProps> = ({ isOpen, onClose, raffle }) => {
  if (!isOpen || !raffle) return null;

  const handleExport = () => {
    // In a real app, this would generate and download a CSV file
    alert('Exportando dados dos participantes para CSV...');
  };

  const paymentStatusStyles: { [key in 'Pendente' | 'Pago' | 'Cancelado']?: string } = {
    'Pago': 'bg-green-100 text-green-800',
    'Pendente': 'bg-yellow-100 text-yellow-800',
    'Cancelado': 'bg-red-100 text-red-800',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Participantes - {raffle.title}</h2>
        <div className="flex-grow overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comprador</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nº do Bilhete</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status Pagamento</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {raffle.participants && raffle.participants.length > 0 ? (
                        raffle.participants.map((p, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.buyerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.ticketNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${paymentStatusStyles[p.paymentStatus]}`}>
                                        {p.paymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center py-10 text-gray-500">Nenhum participante ainda.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className="mt-6 pt-4 border-t flex justify-between items-center">
          <button onClick={handleExport} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            Exportar para CSV
          </button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaffleParticipantsModal;