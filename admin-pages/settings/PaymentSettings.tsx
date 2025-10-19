import React, { useState } from 'react';
import PaymentGatewayModal from './PaymentGatewayModal';
import { StripeIcon, PicPayIcon, NubankIcon, InterIcon, PagSeguroIcon, KiwifyIcon, MercadoPagoIcon } from '../../Icons';

interface Gateway {
    id: string;
    name: string;
    // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
    icon: React.ReactElement;
    connected: boolean;
}

const gatewaysData: Gateway[] = [
    { id: 'stripe', name: 'Stripe', icon: <StripeIcon className="h-8 w-auto" />, connected: true },
    { id: 'picpay', name: 'PicPay', icon: <PicPayIcon className="h-8 w-auto" />, connected: false },
    { id: 'nubank', name: 'Nubank', icon: <NubankIcon className="h-8 w-auto" />, connected: false },
    { id: 'inter', name: 'Inter', icon: <InterIcon className="h-8 w-auto" />, connected: true },
    { id: 'pagseguro', name: 'PagSeguro', icon: <PagSeguroIcon className="h-8 w-auto" />, connected: false },
    { id: 'kiwify', name: 'Kiwify', icon: <KiwifyIcon className="h-8 w-auto" />, connected: false },
    { id: 'mercadopago', name: 'Mercado Pago', icon: <MercadoPagoIcon className="h-8 w-auto" />, connected: true },
];


const PaymentSettings: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGateway, setSelectedGateway] = useState<Gateway | null>(null);

    const handleOpenModal = (gateway: Gateway) => {
        setSelectedGateway(gateway);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedGateway(null);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Meios de Pagamento</h2>
            <p className="mt-1 text-sm text-gray-600">Conecte suas contas de pagamento para receber os valores das suas rifas.</p>
            <div className="mt-6 space-y-4">
                {gatewaysData.map(gateway => (
                    <div key={gateway.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                            {gateway.icon}
                            <span className="font-medium text-gray-800">{gateway.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${gateway.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {gateway.connected ? 'Conectado' : 'Não Conectado'}
                            </span>
                             <button
                                onClick={() => handleOpenModal(gateway)}
                                className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg"
                            >
                                Gerenciar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
             {isModalOpen && selectedGateway && <PaymentGatewayModal gateway={selectedGateway} onClose={handleCloseModal} />}
        </div>
    );
};

export default PaymentSettings;
