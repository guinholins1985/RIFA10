import React from 'react';
import { RAFFLES, USERS, RANKING_DATA } from '../constants';
import { DollarSignIcon, TicketIcon, UsersIcon, GiftIcon } from '../Icons';

const KpiCard: React.FC<{ title: string; value: string; icon: React.ReactElement; color: string }> = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
            <div className={`p-3 rounded-full mr-4 ${color}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};


const RelatoriosPage: React.FC = () => {
    const totalRaised = RAFFLES.reduce((acc, r) => acc + r.raisedAmount, 0);
    const totalTicketsSold = RANKING_DATA.reduce((acc, r) => acc + r.ticketsBought, 0);
    const popularRaffles = [...RAFFLES].sort((a,b) => b.raisedAmount - a.raisedAmount).slice(0, 5);
    const topBuyers = [...RANKING_DATA].sort((a,b) => b.ticketsBought - a.ticketsBought).slice(0, 5);
    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Relatórios</h1>
                <div className="flex items-center space-x-2">
                     <select className="p-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option>Últimos 7 dias</option>
                        <option>Últimos 30 dias</option>
                        <option>Este Mês</option>
                        <option>Todo o Período</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard 
                    title="Total Arrecadado"
                    value={`R$ ${totalRaised.toLocaleString('pt-BR')}`}
                    icon={<DollarSignIcon className="h-6 w-6 text-emerald-700" />}
                    color="bg-emerald-100"
                />
                 <KpiCard 
                    title="Tickets Vendidos"
                    value={totalTicketsSold.toLocaleString('pt-BR')}
                    icon={<TicketIcon className="h-6 w-6 text-blue-700" />}
                    color="bg-blue-100"
                />
                 <KpiCard 
                    title="Novas Rifas"
                    value={RAFFLES.length.toString()}
                    icon={<GiftIcon className="h-6 w-6 text-amber-700" />}
                    color="bg-amber-100"
                />
                 <KpiCard 
                    title="Total de Usuários"
                    value={USERS.length.toString()}
                    icon={<UsersIcon className="h-6 w-6 text-indigo-700" />}
                    color="bg-indigo-100"
                />
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Arrecadação por Dia</h2>
                <div className="h-64 flex items-end justify-center bg-gray-50 p-4 rounded-md">
                   <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                       <path d="M 0 130 C 50 100, 100 50, 150 80 S 250 140, 300 100 S 400 20, 400 20" stroke="#059669" fill="none" strokeWidth="2" />
                       <path d="M 0 130 C 50 100, 100 50, 150 80 S 250 140, 300 100 S 400 20, 400 20 L 400 150 L 0 150 Z" fill="url(#gradient)" />
                       <defs>
                           <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                               <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
                           </linearGradient>
                       </defs>
                   </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Rifas Mais Populares</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left text-sm font-semibold text-gray-600 pb-2">Rifa</th>
                                <th className="text-right text-sm font-semibold text-gray-600 pb-2">Arrecadado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popularRaffles.map(raffle => (
                                <tr key={raffle.id} className="border-b border-gray-100 last:border-0">
                                    <td className="py-3 pr-2 text-sm text-gray-800">{raffle.title}</td>
                                    <td className="py-3 text-right text-sm font-medium text-emerald-600">R$ {raffle.raisedAmount.toLocaleString('pt-BR')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Top Compradores</h2>
                     <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left text-sm font-semibold text-gray-600 pb-2">Nome</th>
                                <th className="text-right text-sm font-semibold text-gray-600 pb-2">Tickets Comprados</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topBuyers.map(buyer => (
                                <tr key={buyer.id} className="border-b border-gray-100 last:border-0">
                                    <td className="py-3 pr-2 text-sm text-gray-800">{buyer.buyerName}</td>
                                    <td className="py-3 text-right text-sm font-medium text-emerald-600">{buyer.ticketsBought}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RelatoriosPage;
