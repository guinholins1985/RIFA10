import React, { useState } from 'react';
import Step1_Cadastro from './steps/Step1_Cadastro';
import Step2_Pagamentos from './steps/Step2_Pagamentos';
import Step3_Numeros from './steps/Step3_Numeros';
import Step4_Divulgacao from './steps/Step4_Divulgacao';
import Step5_Sorteio from './steps/Step5_Sorteio';

interface CreateRifaWizardProps {
    onCancel: () => void;
}

const steps = [
    { id: 1, name: 'Cadastro' },
    { id: 2, name: 'Pagamentos' },
    { id: 3, name: 'Números' },
    { id: 4, name: 'Divulgação' },
    { id: 5, name: 'Sorteio' },
];

const CreateRifaWizard: React.FC<CreateRifaWizardProps> = ({ onCancel }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setCurrentStep(prev => Math.min(prev + 1, steps.length));
    };

    const handlePrev = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleFormChange = (data: any) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1_Cadastro formData={formData} onChange={handleFormChange} />;
            case 2:
                return <Step2_Pagamentos formData={formData} onChange={handleFormChange} />;
            case 3:
                return <Step3_Numeros formData={formData} onChange={handleFormChange} />;
            case 4:
                return <Step4_Divulgacao formData={formData} onChange={handleFormChange} />;
            case 5:
                return <Step5_Sorteio formData={formData} onChange={handleFormChange} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Criar Nova Rifa</h1>
            <p className="text-gray-600 mb-8">Siga os passos para configurar sua campanha.</p>
            
            {/* Stepper */}
            <div className="mb-8">
                <ol className="flex items-center w-full">
                    {steps.map((step, index) => (
                        <li key={step.id} className={`flex w-full items-center ${index < steps.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-1 after:inline-block" : ""}`}>
                            <span className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${currentStep >= step.id ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                {step.id}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Step Content */}
            <div className="min-h-[300px]">
                {renderStep()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t">
                <div>
                    <button 
                        onClick={onCancel}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                    >
                        Cancelar
                    </button>
                </div>
                <div className="space-x-4">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentStep === 1}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg disabled:opacity-50"
                    >
                        Anterior
                    </button>
                    {currentStep < steps.length ? (
                        <button 
                            onClick={handleNext}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Próximo
                        </button>
                    ) : (
                        <button 
                            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Finalizar e Publicar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateRifaWizard;
