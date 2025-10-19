// Implemented the IntegracoesPage component
import React, { useState } from 'react';
import IntegrationModal from './integrations/IntegrationModal';

interface Integration {
    id: string;
    name: string;
    description: string;
    connected: boolean;
}

const integrationsData: Integration[] = [
    { id: 'google-analytics', name: 'Google Analytics', description: 'Acompanhe o tráfego e o comportamento dos usuários.', connected: true },
    { id: 'mailchimp', name: 'Mailchimp', description: 'Sincronize seus participantes com suas listas de e-mail.', connected: false },
    { id: 'facebook-pixel', name: 'Facebook Pixel', description: 'Monitore conversões de anúncios do Facebook.', connected: false },
    { id: 'whatsapp', name: 'WhatsApp', description: 'Envie notificações e suporte via WhatsApp.', connected: true },
];


const IntegracoesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

    const handleOpenModal = (integration: Integration) => {
        setSelectedIntegration(integration);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedIntegration(null);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Integrações</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrationsData.map(integration => (
                    <div key={integration.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                        <h2 className="text-xl font-bold text-gray-800">{integration.name}</h2>
                        <p className="text-gray-600 mt-2 flex-grow">{integration.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${integration.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {integration.connected ? 'Conectado' : 'Desconectado'}
                            </span>
                            <button 
                                onClick={() => handleOpenModal(integration)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
                            >
                                Configurar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedIntegration && <IntegrationModal integration={selectedIntegration} onClose={handleCloseModal} />}
        </div>
    );
};

export default IntegracoesPage;
