import React, { useState } from 'react';
import { RAFFLES } from '../../constants';
import CreateRifaWizard from './rifas/CreateRifaWizard';

const RifasPage: React.FC = () => {
    const [isCreating, setIsCreating] = useState(false);

    if (isCreating) {
        return <CreateRifaWizard onCancel={() => setIsCreating(false)} />;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Minhas Rifas</h1>
                <button 
                    onClick={() => setIsCreating(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Criar Nova Rifa
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">Título</th>
                            <th className="p-2">Arrecadado</th>
                            <th className="p-2">Meta</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RAFFLES.map(raffle => (
                            <tr key={raffle.id} className="border-b hover:bg-gray-50">
                                <td className="p-2 font-medium">{raffle.title}</td>
                                <td className="p-2">R$ {raffle.raisedAmount.toLocaleString('pt-BR')}</td>
                                <td className="p-2">R$ {raffle.goalAmount.toLocaleString('pt-BR')}</td>
                                <td className="p-2">
                                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                                        Ativa
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RifasPage;
