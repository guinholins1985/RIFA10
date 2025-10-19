// Implemented the ColaboracoesPage component
import React from 'react';
import { COLLABORATIONS, RAFFLES } from '../constants';
import { Collaboration, Raffle } from '../types';

const ColaboracoesPage: React.FC = () => {

    const getRaffleTitle = (raffleId: number): string => {
        const raffle = RAFFLES.find((r: Raffle) => r.id === raffleId);
        return raffle ? raffle.title : 'Rifa não encontrada';
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Colaborações</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colaborador</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rifa</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tickets Vendidos</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Arrecadado</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {COLLABORATIONS.map((collab: Collaboration) => (
                            <tr key={collab.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{collab.collaboratorName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getRaffleTitle(collab.raffleId)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{collab.ticketsSold}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">R$ {collab.amountRaised.toLocaleString('pt-BR')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ColaboracoesPage;
