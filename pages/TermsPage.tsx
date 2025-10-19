import React from 'react';
import { View } from '../App';
import InfoPageLayout from '../layouts/InfoPageLayout';

interface TermsPageProps {
  onNavigate: (view: View) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <InfoPageLayout onNavigate={onNavigate} title="Termos e Condições de Uso">
        <h2>1. Aceitação dos Termos</h2>
        <p>Ao acessar e usar a plataforma RIFA10, você concorda em cumprir estes Termos e Condições de Uso e todas as leis e regulamentos aplicáveis.</p>
        
        <h2 className="mt-6">2. Uso da Plataforma</h2>
        <p>A plataforma destina-se a facilitar a organização de rifas para fins beneficentes e de arrecadação de fundos. É proibido o uso da plataforma para atividades ilegais, fraudulentas ou que violem os direitos de terceiros.</p>
        
        <h2 className="mt-6">3. Responsabilidades do Organizador</h2>
        <p>O organizador da rifa é o único responsável pela veracidade das informações, pela entrega do prêmio e pela destinação dos fundos arrecadados. A plataforma RIFA10 não se responsabiliza por quaisquer irregularidades cometidas pelos organizadores.</p>

        <h2 className="mt-6">4. Participação</h2>
        <p>Os participantes devem ser maiores de 18 anos. Ao comprar um bilhete, o participante declara estar ciente e de acordo com todas as regras da rifa específica, incluindo prêmio, data do sorteio e método de apuração.</p>

        <h2 className="mt-6">5. Limitação de Responsabilidade</h2>
        <p>A RIFA10 atua como intermediária e não pode ser responsabilizada por disputas entre organizadores e participantes, falhas na entrega de prêmios ou qualquer dano resultante do uso da plataforma.</p>
    </InfoPageLayout>
  );
};

export default TermsPage;
