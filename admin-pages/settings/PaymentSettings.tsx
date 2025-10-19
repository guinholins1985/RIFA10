import React from 'react';
import { StripeIcon, PicPayIcon, NubankIcon, InterIcon, PagSeguroIcon, KiwifyIcon, MercadoPagoIcon } from '../../Icons';

const paymentGateways = [
    { name: 'Stripe', icon: <StripeIcon className="h-10 w-auto" /> },
    { name: 'PicPay', icon: <PicPayIcon className="h-10 w-auto" /> },
    { name: 'Nubank', icon: <NubankIcon className="h-10 w-auto" /> },
    { name: 'Inter', icon: <InterIcon className="h-10 w-auto" /> },
    { name: 'PagSeguro', icon: <PagSeguroIcon className="h-10 w-auto" /> },
    { name: 'Kiwify', icon: <KiwifyIcon className="h-10 w-auto" /> },
    { name: 'Mercado Pago', icon: <MercadoPagoIcon className="h-10 w-auto" /> },
];

const PaymentGatewayCard: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex-grow flex items-center justify-center">
             {icon}
        </div>
        <div className="w-full">
            <h3 className="font-semibold text-gray-800 mb-3">{name}</h3>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Conectar
            </button>
        </div>
    </div>
);

const PaymentSettings: React.FC = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Conectar Meios de Pagamento</h2>
            <p className="mt-2 text-sm text-gray-600">Conecte sua conta dos provedores abaixo para receber os valores arrecadados diretamente. Você poderá escolher quais deles ativar em cada rifa que criar.</p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paymentGateways.map(gateway => (
                    <PaymentGatewayCard key={gateway.name} name={gateway.name} icon={gateway.icon} />
                ))}
            </div>
        </div>
    );
};

export default PaymentSettings;
