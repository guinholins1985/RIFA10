import React from 'react';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const Step3_Numeros: React.FC<StepProps> = ({ formData, onChange }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">3. Definição dos Números</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantidade de Números</label>
                    <input type="number" placeholder="Ex: 1000" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Valor por Número (R$)</label>
                    <input type="number" placeholder="Ex: 10.00" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
            </div>
        </div>
    );
};

export default Step3_Numeros;
