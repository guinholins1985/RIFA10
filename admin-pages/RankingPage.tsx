// Implemented the RankingPage component
import React from 'react';
import { RANKING_DATA, RAFFLES } from '../constants';
import { RankingEntry, Raffle } from '../types';

const RankingPage: React.FC = () => {

    const getRaffleTitle = (raffleId: number): string => {
        const raffle = RAFFLES.find((r: Raffle) => r.id === raffleId);
        return raffle ? raffle.title : 'Rifa não encontrada';
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Ranking de Compradores</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comprador</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rifa</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tickets Comprados</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {RANKING_DATA.sort((a,b) => b.ticketsBought - a.ticketsBought).map((entry: RankingEntry, index) => (
                            <tr key={entry.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}º</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.buyerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getRaffleTitle(entry.raffleId)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-600">{entry.ticketsBought}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RankingPage;
