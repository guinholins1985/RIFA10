import React, { useState } from 'react';

// FIX: Implemented the AdminDashboard component which was previously missing.
// Import all the pages
import DashboardHomePage from './admin-pages/DashboardHomePage';
import RifasPage from './admin-pages/RifasPage';
import ColaboracoesPage from './admin-pages/ColaboracoesPage';
import RankingPage from './admin-pages/RankingPage';
import ConfiguracoesPage from './admin-pages/ConfiguracoesPage';
import IntegracoesPage from './admin-pages/IntegracoesPage';
import TutoriaisPage from './admin-pages/TutoriaisPage';
import SuportePage from './admin-pages/SuportePage';
import UsuariosPage from './admin-pages/UsuariosPage';
import VaquinhasPage from './admin-pages/VaquinhasPage';
import CuponsPage from './admin-pages/CuponsPage';
import AssinaturasPage from './admin-pages/AssinaturasPage';
import ClassificadosPage from './admin-pages/ClassificadosPage';
import EventosPage from './admin-pages/EventosPage';
import ParceriasPage from './admin-pages/ParceriasPage';
import RelatoriosPage from './admin-pages/RelatoriosPage';


type AdminView = 
  | 'dashboard' 
  | 'rifas' 
  | 'colaboracoes'
  | 'ranking'
  | 'relatorios'
  | 'usuarios'
  | 'vaquinhas'
  | 'cupons'
  | 'assinaturas'
  | 'classificados'
  | 'eventos'
  | 'parcerias'
  | 'integracoes'
  | 'configuracoes'
  | 'tutoriais'
  | 'suporte';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [view, setView] = useState<AdminView>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardHomePage />;
      case 'rifas':
        return <RifasPage />;
      case 'colaboracoes':
        return <ColaboracoesPage />;
      case 'ranking':
        return <RankingPage />;
      case 'relatorios':
        return <RelatoriosPage />;
      case 'usuarios':
        return <UsuariosPage />;
      case 'vaquinhas':
        return <VaquinhasPage />;
      case 'cupons':
        return <CuponsPage />;
      case 'assinaturas':
        return <AssinaturasPage />;
      case 'classificados':
        return <ClassificadosPage />;
      case 'eventos':
        return <EventosPage />;
      case 'parcerias':
        return <ParceriasPage />;
      case 'integracoes':
        return <IntegracoesPage />;
      case 'configuracoes':
        return <ConfiguracoesPage />;
      case 'tutoriais':
        return <TutoriaisPage />;
      case 'suporte':
        return <SuportePage />;
      default:
        return <DashboardHomePage />;
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'rifas', label: 'Minhas Rifas' },
    { id: 'colaboracoes', label: 'Colaborações' },
    { id: 'ranking', label: 'Ranking' },
    { id: 'relatorios', label: 'Relatórios' },
    { id: 'usuarios', label: 'Usuários' },
    { id: 'vaquinhas', label: 'Vaquinhas' },
    { id: 'cupons', label: 'Cupons' },
    { id: 'assinaturas', label: 'Assinaturas' },
    { id: 'classificados', label: 'Classificados' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'parcerias', label: 'Parcerias' },
    { id: 'integracoes', label: 'Integrações' },
    { id: 'configuracoes', label: 'Configurações' },
  ];

  const helpItems = [
    { id: 'tutoriais', label: 'Tutoriais' },
    { id: 'suporte', label: 'Suporte' },
  ];
  
  const NavLink: React.FC<{ viewName: AdminView; currentView: AdminView; setView: (view: AdminView) => void; label: string }> = ({ viewName, currentView, setView, label }) => (
    <button
      onClick={() => {
        setView(viewName);
        setIsSidebarOpen(false);
      }}
      className={`w-full text-left flex items-center p-2.5 rounded-lg transition-colors text-sm font-medium ${
        currentView === viewName
          ? 'bg-emerald-500 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className={`bg-white w-64 flex-shrink-0 border-r flex flex-col transition-transform duration-300 ease-in-out z-20 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full absolute'}`}>
        <div className="p-4 border-b h-16 flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">RIFA<span className="text-amber-500">10</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-1">
            {menuItems.map(item => (
                <NavLink key={item.id} viewName={item.id as AdminView} currentView={view} setView={setView} label={item.label} />
            ))}
            <hr className="my-3" />
            {helpItems.map(item => (
                <NavLink key={item.id} viewName={item.id as AdminView} currentView={view} setView={setView} label={item.label} />
            ))}
            </nav>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={onLogout}
            className="w-full flex items-center p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 text-sm font-medium"
          >
            Sair
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b h-16 flex justify-between items-center px-6">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden md:block"></div> {/* Spacer */}
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Admin</span>
            <div className="w-10 h-10 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold">A</div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
