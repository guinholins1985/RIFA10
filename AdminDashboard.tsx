import React, { useState } from 'react';
import DashboardHomePage from './admin-pages/DashboardHomePage';
import RifasPage from './admin-pages/RifasPage';
import ColaboracoesPage from './admin-pages/ColaboracoesPage';
import RankingPage from './admin-pages/RankingPage';
import ConfiguracoesPage from './admin-pages/ConfiguracoesPage';
import IntegracoesPage from './admin-pages/IntegracoesPage';
import UsuariosPage from './admin-pages/UsuariosPage';
import CategoriasPage from './admin-pages/CategoriasPage';
import VaquinhasPage from './admin-pages/VaquinhasPage';
import CuponsPage from './admin-pages/CuponsPage';
import AssinaturasPage from './admin-pages/AssinaturasPage';
import ClassificadosPage from './admin-pages/ClassificadosPage';
import EventosPage from './admin-pages/EventosPage';
import ParceriasPage from './admin-pages/ParceriasPage';
import RelatoriosPage from './admin-pages/RelatoriosPage';
import TutoriaisPage from './admin-pages/TutoriaisPage';
import SuportePage from './admin-pages/SuportePage';
import { CurrentUser } from './types';
import { UserCircleIcon } from './Icons';


type AdminView = 'dashboard' | 'rifas' | 'colaboracoes' | 'ranking' | 'configuracoes' | 'integracoes' | 'usuarios' | 'categorias' | 'vaquinhas' | 'cupons' | 'assinaturas' | 'classificados' | 'eventos' | 'parcerias' | 'relatorios' | 'tutoriais' | 'suporte';

interface AdminDashboardProps {
  onLogout: () => void;
  currentUser: CurrentUser;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, currentUser }) => {
    const [view, setView] = useState<AdminView>('dashboard');

    const menuItems: { id: AdminView, label: string }[] = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'rifas', label: 'Minhas Rifas' },
        { id: 'categorias', label: 'Categorias' },
        { id: 'usuarios', label: 'Usuários' },
        { id: 'colaboracoes', label: 'Colaborações' },
        { id: 'ranking', label: 'Ranking' },
        { id: 'relatorios', label: 'Relatórios' },
        { id: 'integracoes', label: 'Integrações' },
        { id: 'configuracoes', label: 'Configurações' },
        { id: 'suporte', label: 'Suporte' },
    ];
    
    const renderView = () => {
        switch (view) {
            case 'dashboard': return <DashboardHomePage />;
            case 'rifas': return <RifasPage />;
            case 'colaboracoes': return <ColaboracoesPage />;
            case 'ranking': return <RankingPage />;
            case 'configuracoes': return <ConfiguracoesPage />;
            case 'integracoes': return <IntegracoesPage />;
            case 'usuarios': return <UsuariosPage />;
            case 'categorias': return <CategoriasPage />;
            case 'vaquinhas': return <VaquinhasPage />;
            case 'cupons': return <CuponsPage />;
            case 'assinaturas': return <AssinaturasPage />;
            case 'classificados': return <ClassificadosPage />;
            case 'eventos': return <EventosPage />;
            case 'parcerias': return <ParceriasPage />;
            case 'relatorios': return <RelatoriosPage />;
            case 'tutoriais': return <TutoriaisPage />;
            case 'suporte': return <SuportePage />;
            default: return <DashboardHomePage />;
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

export default AdminDashboard;