import React, { useState } from 'react';
import ProfileSettings from './settings/ProfileSettings';
import SocialSettings from './settings/SocialSettings';
import PaymentSettings from './settings/PaymentSettings';

type SettingsView = 'profile' | 'social' | 'payment';

const ConfiguracoesPage: React.FC = () => {
    const [view, setView] = useState<SettingsView>('profile');

    const renderView = () => {
        switch(view) {
            case 'profile':
                return <ProfileSettings />;
            case 'social':
                return <SocialSettings />;
            case 'payment':
                return <PaymentSettings />;
            default:
                return <ProfileSettings />;
        }
    };

    const TabButton: React.FC<{
        label: string;
        viewName: SettingsView;
        currentView: SettingsView;
        setView: (view: SettingsView) => void;
    }> = ({ label, viewName, currentView, setView }) => (
        <button
            onClick={() => setView(viewName)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg focus:outline-none ${
                currentView === viewName
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>
            <div className="mt-4 mb-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                         <TabButton label="Perfil" viewName="profile" currentView={view} setView={setView} />
                         <TabButton label="Redes Sociais" viewName="social" currentView={view} setView={setView} />
                         <TabButton label="Pagamentos" viewName="payment" currentView={view} setView={setView} />
                    </nav>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                {renderView()}
            </div>
        </div>
    );
};

export default ConfiguracoesPage;
