import React from 'react';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const Step1_Cadastro: React.FC<StepProps> = ({ formData, onChange }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">1. Informações Básicas</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Título da Rifa</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição</label>
                    <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" rows={4}></textarea>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Categoria</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Eletrônicos</option>
                        <option>Solidária</option>
                        <option>Animais de estimação</option>
                        <option>Esporte e lazer</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Meta de Arrecadação (R$)</label>
                    <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Imagem da Rifa</label>
                    <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
                </div>
            </div>
        </div>
    );
};

export default Step1_Cadastro;
