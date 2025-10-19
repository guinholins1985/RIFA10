import React from 'react';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const Step5_Sorteio: React.FC<StepProps> = ({ formData, onChange }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">5. Sorteio</h2>
             <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Método do Sorteio</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Loteria Federal</option>
                        <option>Sorteio Manual na Plataforma</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Data do Sorteio</label>
                    <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
            </div>
        </div>
    );
};

export default Step5_Sorteio;
