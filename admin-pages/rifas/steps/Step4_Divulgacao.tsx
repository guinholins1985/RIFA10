import React from 'react';

interface StepProps {
    formData: any;
    onChange: (data: any) => void;
}

const Step4_Divulgacao: React.FC<StepProps> = ({ formData, onChange }) => {
    return (
        <div>
            {/* FIX: Corrected step number in heading */}
            <h2 className="text-2xl font-bold text-gray-700 mb-6">4. Divulgação</h2>
            <p className="text-gray-600 mb-4">Sua rifa está quase pronta! Aqui está o link para você compartilhar:</p>
            <div className="p-4 bg-gray-100 rounded-md">
                <p className="text-emerald-600 font-mono">https://rifa10.com/sua-rifa-incrivel</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">Você poderá customizar o link após a publicação.</p>
        </div>
    );
};

export default Step4_Divulgacao;
