import React from 'react';
import { View } from '../App';
import InfoPageLayout from '../layouts/InfoPageLayout';

interface FAQPageProps {
  onNavigate: (view: View) => void;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="py-5 border-b border-gray-200 last:border-b-0">
        <h3 className="text-lg font-semibold text-emerald-600">{question}</h3>
        <p className="mt-2 text-gray-600">{answer}</p>
    </div>
)

const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  return (
    <InfoPageLayout onNavigate={onNavigate} title="Perguntas Frequentes (FAQ)">
        <FAQItem 
            question="O que é a RIFA10?"
            answer="É uma plataforma online que permite a criação e participação em rifas com o objetivo de arrecadar fundos para diversas causas sociais, projetos pessoais ou para ajudar quem precisa."
        />
        <FAQItem 
            question="Como posso participar de uma rifa?"
            answer="Para participar, basta escolher a rifa que deseja apoiar, selecionar a quantidade de bilhetes que quer comprar e realizar o pagamento. Você receberá a confirmação por e-mail."
        />
        <FAQItem 
            question="Os pagamentos são seguros?"
            answer="Sim, utilizamos plataformas de pagamento reconhecidas e seguras para processar todas as transações, garantindo a proteção dos seus dados."
        />
        <FAQItem 
            question="Como o vencedor é escolhido?"
            answer="O sorteio é geralmente realizado com base nos resultados da Loteria Federal, garantindo total transparência e imparcialidade. A data e as regras do sorteio estão especificadas na página de cada rifa."
        />
        <FAQItem 
            question="Como posso criar minha própria rifa?"
            answer="Para criar uma rifa, você precisa se cadastrar na plataforma através da área de login e seguir o passo a passo de criação em seu painel de administrador."
        />
    </InfoPageLayout>
  );
};

export default FAQPage;
