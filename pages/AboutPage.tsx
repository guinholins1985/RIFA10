import React from 'react';
import { View } from '../App';
import InfoPageLayout from '../layouts/InfoPageLayout';

interface AboutPageProps {
  onNavigate: (view: View) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <InfoPageLayout onNavigate={onNavigate} title="Nossa Missão">
        <p>A plataforma <strong>RIFA10</strong> nasceu com a missão de conectar pessoas que querem ajudar com causas que precisam de apoio. Acreditamos no poder da união e na generosidade para transformar realidades.</p>
        <p className="mt-4">Nossa ferramenta permite que qualquer pessoa, ONG ou instituição crie uma campanha de arrecadação de forma simples, transparente e segura, utilizando o formato de rifa para engajar doadores e alcançar seus objetivos financeiros.</p>
        <p className="mt-4">Seja para apoiar um tratamento de saúde, ajudar uma causa animal, financiar um projeto social ou realizar um sonho, estamos aqui para oferecer a ponte entre a solidariedade e a realização.</p>
        <p className="mt-4">Junte-se a nós e faça parte desta corrente do bem!</p>
    </InfoPageLayout>
  );
};

export default AboutPage;
