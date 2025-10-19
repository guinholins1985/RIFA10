import React, { useState } from 'react';
import { RAFFLES } from './constants';
import { Raffle } from './types';
import CreateRaffleModal from './CreateRaffleModal';
import { 
    RIFAS_ICON, COLLABORATIONS_ICON, RANKING_ICON, SETTINGS_ICON, 
    INTEGRATIONS_ICON, TUTORIALS_ICON, SUPPORT_ICON, LOGOUT_ICON,
    EDIT_ICON, PLUS_ICON
} from './Icons';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [raffles, setRaffles] = useState<Raffle[]>(RAFFLES);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateRaffle = (newRaffleData: Omit<Raffle, 'id'>) => {
        const newRaffle: Raffle = {
            ...newRaffleData,
            id: Math.max(...raffles.map(r => r.id), 0) + 1,
        };
        setRaffles(prevRaffles => [...prevRaffles, newRaffle]);
    };

    return (
        <div className="flex h-screen bg-brand-light-gray font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-dark-charcoal text-gray-300 flex flex-col">
                <div className="p-4 text-2xl font-bold border-b border-gray-700 text-white">
                  RIFA<span className="text-amber-500">10</span>
                </div>
                <nav className="flex-1 p-2 space-y-1">
                    <a href="#" className="flex items-center p-2 rounded bg-gray-700 text-white"><span className="mr-3">{RIFAS_ICON}</span>Rifas</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{COLLABORATIONS_ICON}</span>Colaborações</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{RANKING_ICON}</span>Ranking</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{SETTINGS_ICON}</span>Configurações</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{INTEGRATIONS_ICON}</span>Integrações</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{TUTORIALS_ICON}</span>Tutoriais</a>
                    <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"><span className="mr-3">{SUPPORT_ICON}</span>Suporte</a>
                </nav>
                <div className="p-2 border-t border-gray-700">
                    <button onClick={onLogout} className="flex items-center p-2 rounded w-full text-gray-300 hover:bg-red-500 hover:text-white transition-colors">
                        <span className="mr-3">{LOGOUT_ICON}</span>Sair
                    </button>
                </div>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Gerenciar Rifas</h1>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg flex items-center hover:bg-emerald-700 transition-colors"
                    >
                        {PLUS_ICON} Criar Rifa
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Título</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Categoria</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Arrecadado</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Meta</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {raffles.map(raffle => (
                                <tr key={raffle.id} className="hover:bg-gray-50">
                                    <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{raffle.title}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{raffle.category}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">R$ {raffle.raisedAmount.toLocaleString('pt-BR')}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">R$ {raffle.goalAmount.toLocaleString('pt-BR')}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                                        <button className="text-emerald-600 hover:text-emerald-800 flex items-center font-semibold">
                                            {EDIT_ICON} Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {isModalOpen && (
                <CreateRaffleModal 
                    onClose={() => setIsModalOpen(false)} 
                    onCreate={handleCreateRaffle}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
