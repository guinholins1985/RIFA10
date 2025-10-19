import React from 'react';

const ProfileSettings: React.FC = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Perfil</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" defaultValue="Admin" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" defaultValue="admin@rifa10.com" />
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg">
                    Salvar Alterações
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;
