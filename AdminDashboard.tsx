import React, { useState } from 'react';
import { DASHBOARD_ICON, LOGOUT_ICON, RAFFLE_ICON, SETTINGS_ICON, USERS_ICON } from './Icons';
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

interface AdminDashboardProps {
  onLogout: () => void;
}

type AdminView = 
  'dashboard' | 
  'rifas' | 
  'colaboracoes' |
  'ranking' |
  'usuarios' |
  'vaquinhas' |
  'cupons' |
  'assinaturas' |
  'classificados' |
  'eventos' |
  'parcerias' |
  'relatorios' |
  'configuracoes' |
  'integracoes' |
  'tutoriais' |
  'suporte';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [view, setView] = useState<AdminView>('dashboard');

  const renderContent = () => {
    switch (view) {
      case 'dashboard': return <DashboardHomePage />;
      case 'rifas': return <RifasPage />;
      case 'colaboracoes': return <ColaboracoesPage />;
      case 'ranking': return <RankingPage />;
      case 'configuracoes': return <ConfiguracoesPage />;
      case 'integracoes': return <IntegracoesPage />;
      case 'tutoriais': return <TutoriaisPage />;
      case 'suporte': return <SuportePage />;
      case 'usuarios': return <UsuariosPage />;
      case 'vaquinhas': return <VaquinhasPage />;
      case 'cupons': return <CuponsPage />;
      case 'assinaturas': return <AssinaturasPage />;
      case 'classificados': return <ClassificadosPage />;
      case 'eventos': return <EventosPage />;
      case 'parcerias': return <ParceriasPage />;
      case 'relatorios': return <RelatoriosPage />;
      default: return <DashboardHomePage />;
    }
  };

  const NavLink = ({ icon, label, viewName }: { icon: JSX.Element, label: string, viewName: AdminView }) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setView(viewName);
      }}
      className={`flex items-center px-4 py-2 mt-2 text-gray-100 transition-colors duration-200 transform rounded-md hover:bg-gray-700 ${view === viewName ? 'bg-gray-700' : ''}`}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </a>
  );

  return (
    <div className="flex h-screen bg-gray-200 font-sans">
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">RIFA10 Admin</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <NavLink icon={DASHBOARD_ICON} label="Dashboard" viewName="dashboard" />
            <NavLink icon={RAFFLE_ICON} label="Rifas" viewName="rifas" />
            <NavLink icon={USERS_ICON} label="Usuários" viewName="usuarios" />
            <NavLink icon={SETTINGS_ICON} label="Configurações" viewName="configuracoes" />
            <NavLink icon={RAFFLE_ICON} label="Colaborações" viewName="colaboracoes" />
            <NavLink icon={RAFFLE_ICON} label="Ranking" viewName="ranking" />
            <NavLink icon={RAFFLE_ICON} label="Vaquinhas" viewName="vaquinhas" />
            <NavLink icon={RAFFLE_ICON} label="Cupons" viewName="cupons" />
            <NavLink icon={RAFFLE_ICON} label="Assinaturas" viewName="assinaturas" />
            <NavLink icon={RAFFLE_ICON} label="Classificados" viewName="classificados" />
            <NavLink icon={RAFFLE_ICON} label="Eventos" viewName="eventos" />
            <NavLink icon={RAFFLE_ICON} label="Parcerias" viewName="parcerias" />
            <NavLink icon={RAFFLE_ICON} label="Relatórios" viewName="relatorios" />
            <NavLink icon={SETTINGS_ICON} label="Integrações" viewName="integracoes" />
            <NavLink icon={SETTINGS_ICON} label="Tutoriais" viewName="tutoriais" />
            <NavLink icon={SETTINGS_ICON} label="Suporte" viewName="suporte" />
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            {/* Mobile menu button can be added here */}
          </div>
          <div className="flex items-center pr-4">
            <button
              onClick={onLogout}
              className="flex items-center text-gray-500 hover:text-red-700"
            >
              <span className="mr-2">Logout</span>
              {LOGOUT_ICON}
            </button>
          </div>
        </div>
        <div className="p-4 bg-gray-100 flex-grow">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
