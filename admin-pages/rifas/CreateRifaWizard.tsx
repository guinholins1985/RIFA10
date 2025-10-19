import React, { useState } from 'react';
import Step1_Cadastro from './steps/Step1_Cadastro';
import Step2_Pagamentos from './steps/Step2_Pagamentos';
import Step3_Numeros from './steps/Step3_Numeros';
import Step4_Divulgacao from './steps/Step4_Divulgacao';
import Step5_Sorteio from './steps/Step5_Sorteio';


interface CreateRifaWizardProps {
    onNavigateToList: () => void;
}

const CreateRifaWizard: React.FC<CreateRifaWizardProps> = ({ onNavigateToList }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const totalSteps = 5;

    const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
    const handleFormChange = (newData: any) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const steps = [
        { num: 1, title: "Cadastro", component: <Step1_Cadastro formData={formData} onChange={handleFormChange} /> },
        { num: 2, title: "Pagamentos", component: <Step2_Pagamentos formData={formData} onChange={handleFormChange} /> },
        { num: 3, title: "Números", component: <Step3_Numeros formData={formData} onChange={handleFormChange} /> },
        { num: 4, title: "Divulgação", component: <Step4_Divulgacao formData={formData} onChange={handleFormChange} /> },
        { num: 5, title: "Sorteio", component: <Step5_Sorteio formData={formData} onChange={handleFormChange} /> },
    ];

    const currentStepData = steps[step - 1];

    return (
        <div>
             <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Criar Nova Rifa</h1>
                <button 
                    onClick={onNavigateToList}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Voltar para a Lista
                </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-8">
                    {/* Progress Bar */}
                    <ol className="flex items-center w-full">
                        {steps.map((s, index) => (
                             <li key={s.num} className={`flex w-full items-center ${index < steps.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block" : ""} ${step > s.num ? 'after:border-emerald-600' : 'after:border-gray-200'}`}>
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= s.num ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                    {s.num}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
                
                {currentStepData.component}
                
                <div className="mt-8 flex justify-between">
                    <button onClick={handlePrev} disabled={step === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg disabled:opacity-50">
                        Anterior
                    </button>
                    {step < totalSteps ? (
                         <button onClick={handleNext} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg">
                            Próximo
                        </button>
                    ) : (
                         <button onClick={onNavigateToList} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg">
                            Finalizar e Publicar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateRifaWizard;
