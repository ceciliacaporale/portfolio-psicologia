import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaRegLightbulb, FaCogs, FaHandsHelping } from 'react-icons/fa';
import {
  Card,
  CardWrapper,
  CarouselContainer,
  DotsContainer,
  Dot,
} from './DisplayCard.styles';

type CardItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const cards: CardItem[] = [
  {
    icon: <FaRegLightbulb />,
    title: 'Consulta da Melhor Evidência',
    description: 'Busco sempre as informações mais recentes e relevantes para garantir um tratamento eficaz.',
  },
  {
    icon: <FaCogs />,
    title: 'Perícia Clínica e Aperfeiçoamento Contínuo',
    description: 'Estou em constante atualização por meio de formações e supervisões, para oferecer a melhor terapia possível.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Respeito pelas Preferências e Cultura do Paciente',
    description: 'Compreendo as necessidades individuais e culturais para personalizar o tratamento de forma acolhedora.',
  },
];

const DisplayCardList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 994);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.children[0].clientWidth + 16;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container && isMobile) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, isMobile]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.children[0].clientWidth + 16;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <>
      {isMobile ? (
        <CarouselContainer>
          <CardWrapper ref={containerRef}>
            {cards.map((card, i) => (
              <Card key={i}>
                {card.icon}
                <h4>{card.title}</h4>
                <span>{card.description}</span>
              </Card>
            ))}
          </CardWrapper>
          <DotsContainer>
            {cards.map((_, i) => (
              <Dot key={i} active={i === activeIndex} onClick={() => scrollToCard(i)} aria-label={`Ir para o slide ${i + 1}`}  aria-current={i === activeIndex ? "true" : undefined}/>
            ))}
          </DotsContainer>
        </CarouselContainer>
      ) : (
        <CardWrapper style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {cards.map((card, i) => (
            <Card key={i}>
              {card.icon}
              <h4>{card.title}</h4>
              <span>{card.description}</span>
            </Card>
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default DisplayCardList;
