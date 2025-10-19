import React, { useState, useMemo } from 'react';
import { RAFFLES } from '../constants';
import { CurrentUser, Raffle, Participant } from '../types';
import ShareModal from '../ShareModal';
import { ShareIcon } from '../Icons';

interface MinhasParticipacoesPageProps {
  currentUser: CurrentUser;
}

const MinhasParticipacoesPage: React.FC<MinhasParticipacoesPageProps> = ({ currentUser }) => {
    const [isShareModalOpen, setShareModalOpen] = useState(false);
    const [raffleToShare, setRaffleToShare] = useState<Raffle | null>(null);

    const userRaffles = useMemo(() => {
        const participationMap = new Map<number, Participant[]>();

        RAFFLES.forEach(raffle => {
            const userParticipants = raffle.participants?.filter(p => p.userId === currentUser.id);
            if (userParticipants && userParticipants.length > 0) {
                participationMap.set(raffle.id, userParticipants);
            }
        });

        return Array.from(participationMap.entries()).map(([raffleId, participants]) => {
            return {
                raffle: RAFFLES.find(r => r.id === raffleId)!,
                participants
            };
        });
    }, [currentUser.id]);

    const handleShare = (raffle: Raffle) => {
        setRaffleToShare(raffle);
        setShareModalOpen(true);
    };

    const statusStyles: { [key in Raffle['status']]: string } = {
        'Ativa': 'bg-green-100 text-green-800',
        'Encerrada': 'bg-yellow-100 text-yellow-800',
        'Sorteada': 'bg-blue-100 text-blue-800',
        'Cancelada': 'bg-red-100 text-red-800',
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Minhas Participações</h1>
            {userRaffles.length > 0 ? (
                <div className="space-y-6">
                    {userRaffles.map(({ raffle, participants }) => (
                        <div key={raffle.id} className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
                            <img src={raffle.imageUrl} alt={raffle.title} className="w-32 h-32 object-cover rounded-md flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[raffle.status]}`}>
                                            {raffle.status}
                                        </span>
                                        <h2 className="text-lg font-bold text-gray-800 mt-1">{raffle.title}</h2>
                                    </div>
                                    <button onClick={() => handleShare(raffle)} className="text-gray-500 hover:text-emerald-600" title="Compartilhar Rifa">
                                        <ShareIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm font-semibold text-gray-700">Seus números:</p>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {participants.map(p => (
                                            <span key={p.ticketNumber} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                                                {p.ticketNumber}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {raffle.status === 'Sorteada' && raffle.winners?.some(w => participants.some(p => p.ticketNumber === w.ticketNumber)) && (
                                     <div className="mt-3 p-2 bg-amber-100 border border-amber-300 text-amber-800 rounded-md text-sm font-semibold">
                                        Parabéns! Você é um dos ganhadores desta rifa!
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl text-gray-700">Você ainda não participou de nenhuma rifa.</h2>
                    <p className="text-gray-500 mt-2">Explore as rifas disponíveis e participe para começar a ganhar!</p>
                </div>
            )}

            {raffleToShare && (
                <ShareModal 
                    isOpen={isShareModalOpen}
                    onClose={() => setShareModalOpen(false)}
                    raffleTitle={raffleToShare.title}
                    raffleUrl={`https://rifa10.com/rifa/${raffleToShare.id}`}
                />
            )}
        </div>
    );
};

export default MinhasParticipacoesPage;
