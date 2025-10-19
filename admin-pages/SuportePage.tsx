import React, { useState } from 'react';
import { QuestionMarkCircleIcon, MailIcon, ChatAlt2Icon, BookOpenIcon, WhatsAppIcon } from '../Icons';

const SuportePage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you would handle the form submission here
    };

    const SupportOptionCard: React.FC<{ icon: React.ReactElement; title: string; description: string; buttonText: string; onClick?: () => void; href?: string }> = 
    ({ icon, title, description, buttonText, onClick, href }) => (
        <div className="bg-white p-6 rounded-lg shadow flex items-start">
            <div className="flex-shrink-0 text-emerald-600">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1">{description}</p>
                <a 
                    href={href || '#'} 
                    onClick={onClick}
                    className="inline-block mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-800"
                >
                    {buttonText} &rarr;
                </a>
            </div>
        </div>
    );

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Central de Suporte</h1>
            <p className="text-gray-600 mb-8">Precisa de ajuda? Escolha uma das opções abaixo para começar.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                        <ChatAlt2Icon className="h-8 w-8 text-emerald-600 mr-3"/>
                        <h2 className="text-2xl font-bold text-gray-800">Envie uma Mensagem</h2>
                    </div>

                    {submitted ? (
                        <div className="text-center p-6 bg-emerald-50 rounded-lg">
                            <h3 className="text-xl font-bold text-emerald-800">Obrigado!</h3>
                            <p className="text-emerald-700 mt-2">Sua mensagem foi enviada. Nossa equipe de suporte entrará em contato em breve.</p>
                             <button onClick={() => setSubmitted(false)} className="mt-4 bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700">
                                Enviar outra mensagem
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                                    <select id="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500">
                                        <option>Dúvida sobre Pagamentos</option>
                                        <option>Problema Técnico</option>
                                        <option>Sugestão de Melhoria</option>
                                        <option>Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Sua Mensagem</label>
                                    <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" placeholder="Descreva seu problema ou dúvida em detalhes..."></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300">
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="space-y-6">
                   <SupportOptionCard
                        icon={<QuestionMarkCircleIcon className="h-8 w-8" />}
                        title="Perguntas Frequentes"
                        description="Encontre respostas rápidas para as dúvidas mais comuns."
                        buttonText="Ver FAQ"
                   />
                   <SupportOptionCard
                        icon={<BookOpenIcon className="h-8 w-8" />}
                        title="Tutoriais e Guias"
                        description="Aprenda a usar a plataforma com nossos guias passo a passo."
                        buttonText="Acessar Tutoriais"
                   />
                    <div className="bg-white p-6 rounded-lg shadow">
                         <h3 className="text-lg font-bold text-gray-800 mb-3">Contato Direto</h3>
                         <div className="space-y-3">
                            <a href="mailto:suporte@rifa10.com" className="flex items-center text-gray-700 hover:text-emerald-600">
                                <MailIcon className="h-5 w-5 mr-3" />
                                <span>suporte@rifa10.com</span>
                            </a>
                             <a href="#" className="flex items-center text-gray-700 hover:text-emerald-600">
                                <WhatsAppIcon className="h-5 w-5 mr-3" />
                                <span>(11) 99999-8888</span>
                            </a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuportePage;
