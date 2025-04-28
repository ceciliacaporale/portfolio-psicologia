import React from 'react';
import { FaRegLightbulb, FaCogs, FaHandsHelping } from 'react-icons/fa'; 
import { Card } from './DisplayCard.styles';
interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DisplayCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <Card>
    <div>{icon}</div>
    <h4>{title}</h4>
    <span>{description}</span>
  </Card>
);

const DisplayCardList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <DisplayCard 
        icon={<FaRegLightbulb />} 
        title="Consulta da Melhor Evidência" 
        description="Busco sempre as informações mais recentes e relevantes para garantir um tratamento eficaz."
      />
      <DisplayCard 
        icon={<FaCogs />} 
        title="Perícia Clínica e Aperfeiçoamento Contínuo" 
        description="Estou em constante atualização por meio de formações e supervisões, para oferecer a melhor terapia possível."
      />
      <DisplayCard 
        icon={<FaHandsHelping />} 
        title="Respeito pelas Preferências e Cultura do Paciente" 
        description="Compreendo as necessidades individuais e culturais para personalizar o tratamento de forma acolhedora."
      />
    </div>
  );
}

export default DisplayCardList;
