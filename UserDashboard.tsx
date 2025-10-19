import React, { useState } from 'react';
import { CurrentUser } from './types';
import { UserCircleIcon } from './Icons';
import MinhasParticipacoesPage from './user-pages/MinhasParticipacoesPage';
import MinhaContaPage from './user-pages/MinhaContaPage';

type UserView = 'participacoes' | 'conta';

interface UserDashboardProps {
  onLogout: () => void;
  currentUser: CurrentUser;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onLogout, currentUser }) => {
    const [view, setView] = useState<UserView>('participacoes');

    const menuItems: { id: UserView, label: string }[] = [
        { id: 'participacoes', label: 'Minhas Participações' },
        { id: 'conta', label: 'Minha Conta' },
    ];
    
    const renderView = () => {
        switch (view) {
            case 'participacoes': return <MinhasParticipacoesPage currentUser={currentUser} />;
            case 'conta': return <MinhaContaPage currentUser={currentUser} />;
            default: return <MinhasParticipacoesPage currentUser={currentUser} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
                    RIFA<span className="text-amber-500">10</span>
                </div>
                 <div className="p-4 border-b border-gray-700 flex items-center space-x-3">
                    <UserCircleIcon className="h-10 w-10 text-gray-400" />
                    <div>
                        <p className="font-bold text-sm">{currentUser.name}</p>
                        <p className="text-xs text-gray-400">{currentUser.role}</p>
                    </div>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-1">
                    {menuItems.map(item => (
                         <button key={item.id} onClick={() => setView(item.id)} className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${view === item.id ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                            {item.label}
                        </button>
                    ))}
                </nav>
                 <div className="p-4 border-t border-gray-700">
                    <button onClick={onLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Sair
                    </button>
                </div>
            </aside>
            <main className="flex-1 p-10 overflow-auto">
                {renderView()}
            </main>
        </div>
    );
};

export default UserDashboard;
