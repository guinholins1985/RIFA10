import React from 'react';

const SocialSettings: React.FC = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Redes Sociais</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Facebook</label>
                    <input type="text" placeholder="https://facebook.com/seu-perfil" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Instagram</label>
                    <input type="text" placeholder="https://instagram.com/seu-perfil" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg">
                    Salvar Alterações
                </button>
            </div>
        </div>
    );
};

export default SocialSettings;
