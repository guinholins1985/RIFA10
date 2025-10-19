import React from 'react';

interface Gateway {
    id: string;
    name: string;
    // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
    icon: React.ReactElement;
    connected: boolean;
}

interface PaymentGatewayModalProps {
  onClose: () => void;
  gateway: Gateway;
}

const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({ onClose, gateway }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Configurar {gateway.name}</h2>
        <form>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Client ID</label>
                    <input type="text" placeholder="Insira seu Client ID" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Client Secret</label>
                    <input type="password" placeholder="Insira seu Client Secret" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
            </div>
             <div className="mt-6 flex justify-between">
              <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Cancelar
              </button>
              <button type="submit" onClick={(e) => { e.preventDefault(); onClose(); }} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                Salvar e Conectar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentGatewayModal;
