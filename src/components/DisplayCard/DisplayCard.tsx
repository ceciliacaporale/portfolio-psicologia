import React, { useRef, useState, useEffect } from 'react';
import { FaRegLightbulb, FaCogs, FaHandsHelping } from 'react-icons/fa';
import {
  Card,
  CardWrapper,
  CarouselContainer,
  DotsContainer,
  Dot,
} from './DisplayCard.styles';

const DisplayCard = ({ icon, title, description }: any) => (
  <Card>
    <div>{icon}</div>
    <h4>{title}</h4>
    <span>{description}</span>
  </Card>
);

const DisplayCardList = () => {
  const cards = [
    {
      icon: <FaRegLightbulb />,
      title: "Consulta da Melhor Evidência",
      description: "Busco sempre as informações mais recentes e relevantes para garantir um tratamento eficaz.",
    },
    {
      icon: <FaCogs />,
      title: "Perícia Clínica e Aperfeiçoamento Contínuo",
      description: "Estou em constante atualização por meio de formações e supervisões, para oferecer a melhor terapia possível.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Respeito pelas Preferências e Cultura do Paciente",
      description: "Compreendo as necessidades individuais e culturais para personalizar o tratamento de forma acolhedora.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 994);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].clientWidth;
      containerRef.current.scrollTo({
        left: index * (cardWidth + 16), // 16px = gap
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <>
      {isMobile ? (
        <CarouselContainer>
          <CardWrapper ref={containerRef}>
            {cards.map((card, i) => (
              <Card key={i}>{card.icon}<h4>{card.title}</h4><span>{card.description}</span></Card>
            ))}
          </CardWrapper>
          <DotsContainer>
            {cards.map((_, i) => (
              <Dot key={i} active={i === activeIndex} onClick={() => scrollToCard(i)} />
            ))}
          </DotsContainer>
        </CarouselContainer>
      ) : (
        <CardWrapper style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {cards.map((card, i) => (
            <Card key={i}>{card.icon}<h4>{card.title}</h4><span>{card.description}</span></Card>
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default DisplayCardList;
