import React from 'react';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const Step1_Cadastro: React.FC<StepProps> = ({ formData, onChange }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">1. Informações Básicas da Rifa</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Título da Rifa</label>
                    <input type="text" placeholder="Ex: Ajuda para o Abrigo de Cães" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição</label>
                    <textarea placeholder="Descreva o objetivo da sua rifa..." rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Categoria</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Saúde</option>
                        <option>Educação</option>
                        <option>Causa Pessoal</option>
                        <option>Causa Animal</option>
                        <option>Ação Social</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Data de Início</label>
                        <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Data de Fim</label>
                        <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Regulamento</label>
                    <textarea placeholder="Descreva as regras da sua rifa..." rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Imagem de Capa</label>
                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                                    <span>Carregar um arquivo</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">ou arraste e solte</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Prêmios</h3>
                    <div className="space-y-2">
                        <input type="text" placeholder="1º Prêmio" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        <input type="text" placeholder="2º Prêmio (Opcional)" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        <input type="text" placeholder="3º Prêmio (Opcional)" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1_Cadastro;