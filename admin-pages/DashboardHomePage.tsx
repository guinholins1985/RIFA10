import React from 'react';

const DashboardHomePage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="mt-2 text-gray-600">Bem-vindo ao seu painel de controle.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700">Total Arrecadado</h3>
                    <p className="text-3xl font-bold text-emerald-600 mt-2">R$ 125.430,00</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700">Rifas Ativas</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700">Novos Participantes</h3>
                    <p className="text-3xl font-bold text-amber-600 mt-2">345</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700">Taxa de Sucesso</h3>
                    <p className="text-3xl font-bold text-pink-600 mt-2">92%</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomePage;
