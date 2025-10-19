import React from 'react';
import { StripeIcon, PicPayIcon, NubankIcon, InterIcon, PagSeguroIcon, KiwifyIcon, MercadoPagoIcon } from '../../../Icons';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const paymentGateways = [
    { id: 'stripe', name: 'Stripe', icon: <StripeIcon className="h-8 w-auto" /> },
    { id: 'picpay', name: 'PicPay', icon: <PicPayIcon className="h-8 w-auto" /> },
    { id: 'nubank', name: 'Nubank', icon: <NubankIcon className="h-8 w-auto" /> },
    { id: 'inter', name: 'Inter', icon: <InterIcon className="h-8 w-auto" /> },
    { id: 'pagseguro', name: 'PagSeguro', icon: <PagSeguroIcon className="h-8 w-auto" /> },
    { id: 'kiwify', name: 'Kiwify', icon: <KiwifyIcon className="h-8 w-auto" /> },
    { id: 'mercadopago', name: 'Mercado Pago', icon: <MercadoPagoIcon className="h-8 w-auto" /> },
];

const Step2_Pagamentos: React.FC<StepProps> = ({ formData, onChange }) => {
    // In a real app, this would come from the parent state
    const enabledGateways = formData.payments || {};

    const handleCheckboxChange = (id: string) => {
        const updatedGateways = { ...enabledGateways, [id]: !enabledGateways[id] };
        onChange({ payments: updatedGateways });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">2. Meios de Pagamento</h2>
            <p className="text-sm text-gray-500 mb-6">Selecione os gateways de pagamento que você deseja habilitar para esta rifa. Você pode conectar e gerenciar suas contas na seção "Configurações".</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentGateways.map((gateway) => (
                    <label key={gateway.id} htmlFor={gateway.id} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                            id={gateway.id}
                            name={gateway.id}
                            type="checkbox"
                            checked={!!enabledGateways[gateway.id]}
                            onChange={() => handleCheckboxChange(gateway.id)}
                            className="focus:ring-emerald-500 h-5 w-5 text-emerald-600 border-gray-300 rounded"
                        />
                        <div className="ml-4 flex items-center space-x-3">
                            {gateway.icon}
                            <span className="font-medium text-gray-800">{gateway.name}</span>
                        </div>
                    </label>
                ))}
            </div>

             <div className="mt-8 p-4 bg-emerald-50 border-l-4 border-emerald-400 text-emerald-800 rounded-r-lg">
                <h4 className="font-bold">Taxa da Plataforma</h4>
                <p className="text-sm mt-1">
                    Lembre-se que a plataforma RIFA10 aplica uma taxa de serviço sobre o valor total arrecadado para cobrir custos de operação e manutenção. Consulte os <a href="#" className="underline hover:text-emerald-600">Termos de Serviço</a> para mais detalhes.
                </p>
            </div>
        </div>
    );
};

export default Step2_Pagamentos;
