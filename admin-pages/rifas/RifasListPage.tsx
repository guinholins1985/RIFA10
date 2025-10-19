import React, { useState } from 'react';
import { RAFFLES } from '../../constants';
import { Raffle } from '../../types';
import { ShareIcon, TrashIcon, TrophyIcon, UsersGroupIcon } from '../../Icons';
import RaffleParticipantsModal from './RaffleParticipantsModal';
import DrawRaffleModal from './DrawRaffleModal';
import WinnersModal from './WinnersModal';
import ShareModal from '../../ShareModal';

interface RifasListPageProps {
    onNavigateToCreate: () => void;
}

const RifasListPage: React.FC<RifasListPageProps> = ({ onNavigateToCreate }) => {
    const [raffles, setRaffles] = useState<Raffle[]>(RAFFLES);
    const [selectedRaffle, setSelectedRaffle] = useState<Raffle | null>(null);
    const [isParticipantsModalOpen, setParticipantsModalOpen] = useState(false);
    const [isDrawModalOpen, setDrawModalOpen] = useState(false);
    const [isWinnersModalOpen, setWinnersModalOpen] = useState(false);
    const [isShareModalOpen, setShareModalOpen] = useState(false);

    const openParticipantsModal = (raffle: Raffle) => {
        setSelectedRaffle(raffle);
        setParticipantsModalOpen(true);
    };

    const openDrawModal = (raffle: Raffle) => {
        setSelectedRaffle(raffle);
        setDrawModalOpen(true);
    };
    
    const openWinnersModal = (raffle: Raffle) => {
        setSelectedRaffle(raffle);
        setWinnersModalOpen(true);
    };

    const openShareModal = (raffle: Raffle) => {
        setSelectedRaffle(raffle);
        setShareModalOpen(true);
    };

    const handleDelete = (raffleId: number) => {
        if (window.confirm("Tem certeza que deseja excluir esta rifa?")) {
            setRaffles(raffles.filter(r => r.id !== raffleId));
        }
    };

    const handleDrawConfirm = (raffleId: number) => {
        setRaffles(raffles.map(r => {
            if (r.id === raffleId) {
                // Simulate drawing a winner from participants
                const participants = r.participants || [];
                if (participants.length > 0) {
                    const winnerParticipant = participants[Math.floor(Math.random() * participants.length)];
                    return { 
                        ...r, 
                        status: 'Sorteada', 
                        winners: [{ place: 1, buyerName: winnerParticipant.buyerName, ticketNumber: winnerParticipant.ticketNumber }]
                    };
                }
                return { ...r, status: 'Sorteada', winners: [] }; // No participants to draw from
            }
            return r;
        }));
    };
    
    const statusStyles: { [key in Raffle['status']]: string } = {
        'Ativa': 'bg-green-100 text-green-800',
        'Encerrada': 'bg-yellow-100 text-yellow-800',
        'Sorteada': 'bg-blue-100 text-blue-800',
        'Cancelada': 'bg-red-100 text-red-800',
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Minhas Rifas</h1>
                <button 
                    onClick={onNavigateToCreate}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg flex items-center"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    Criar Nova Rifa
                </button>
            </div>
             <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrecadação</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dias Restantes</th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {raffles.map((raffle: Raffle) => (
                            <tr key={raffle.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full object-cover" src={raffle.imageUrl} alt={raffle.title} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{raffle.title}</div>
                                            <div className="text-sm text-gray-500">{raffle.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">R$ {raffle.raisedAmount.toLocaleString('pt-BR')} / R$ {raffle.goalAmount.toLocaleString('pt-BR')}</div>
                                    <div className="text-sm text-gray-500">{((raffle.raisedAmount / raffle.goalAmount) * 100).toFixed(0)}%</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[raffle.status]}`}>
                                        {raffle.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raffle.daysLeft}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <div className="flex items-center justify-center space-x-2">
                                        <button onClick={() => openParticipantsModal(raffle)} className="text-gray-500 hover:text-blue-600" title="Ver Participantes"><UsersGroupIcon className="h-5 w-5"/></button>
                                        {raffle.status === 'Encerrada' && <button onClick={() => openDrawModal(raffle)} className="bg-amber-500 text-white px-3 py-1 text-xs rounded-md hover:bg-amber-600">Sortear</button>}
                                        {raffle.status === 'Sorteada' && <button onClick={() => openWinnersModal(raffle)} className="text-gray-500 hover:text-amber-500" title="Ver Ganhadores"><TrophyIcon className="h-5 w-5"/></button>}
                                        <button onClick={() => openShareModal(raffle)} className="text-gray-500 hover:text-emerald-600" title="Compartilhar"><ShareIcon className="h-5 w-5"/></button>
                                        <button onClick={() => handleDelete(raffle.id)} className="text-gray-500 hover:text-red-600" title="Excluir"><TrashIcon className="h-5 w-5"/></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <RaffleParticipantsModal isOpen={isParticipantsModalOpen} onClose={() => setParticipantsModalOpen(false)} raffle={selectedRaffle} />
            <DrawRaffleModal isOpen={isDrawModalOpen} onClose={() => setDrawModalOpen(false)} raffle={selectedRaffle} onDrawConfirm={handleDrawConfirm} />
            <WinnersModal isOpen={isWinnersModalOpen} onClose={() => setWinnersModalOpen(false)} raffle={selectedRaffle} />
            {selectedRaffle && (
                <ShareModal
                    isOpen={isShareModalOpen}
                    onClose={() => setShareModalOpen(false)}
                    raffleTitle={selectedRaffle.title}
                    raffleUrl={`https://rifa10.com/rifa/${selectedRaffle.id}`}
                />
            )}

        </div>
    );
};

export default RifasListPage;