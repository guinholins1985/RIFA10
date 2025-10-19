import React from 'react';
import { CurrentUser } from '../types';

interface MinhaContaPageProps {
  currentUser: CurrentUser;
}

const MinhaContaPage: React.FC<MinhaContaPageProps> = ({ currentUser }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Minha Conta</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Informações do Perfil</h2>
                    <form className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input type="text" defaultValue={currentUser.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" defaultValue={currentUser.email} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed" />
                        </div>
                        <button type="submit" onClick={e => e.preventDefault()} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg">
                            Salvar Alterações
                        </button>
                    </form>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Alterar Senha</h2>
                    <form className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Senha Atual</label>
                            <input type="password" placeholder="********" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nova Senha</label>
                            <input type="password" placeholder="********" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Confirmar Nova Senha</label>
                            <input type="password" placeholder="********" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <button type="submit" onClick={e => e.preventDefault()} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg">
                            Alterar Senha
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MinhaContaPage;
