// Implemented the IntegrationModal component
import React from 'react';

interface Integration {
    id: string;
    name: string;
    description: string;
    connected: boolean;
}

interface IntegrationModalProps {
  onClose: () => void;
  integration: Integration;
}

const IntegrationModal: React.FC<IntegrationModalProps> = ({ onClose, integration }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Configurar {integration.name}</h2>
        <form>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">API Key</label>
                    <input type="text" placeholder="Insira sua chave de API" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">ID da Conta</label>
                    <input type="text" placeholder="Insira o ID da sua conta" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
            </div>
             <div className="mt-6 flex justify-end">
              <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                Cancelar
              </button>
              <button type="submit" onClick={(e) => { e.preventDefault(); onClose(); }} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                Salvar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default IntegrationModal;
