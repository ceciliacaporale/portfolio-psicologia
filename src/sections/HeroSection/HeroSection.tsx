import { HeroSectionContainer, Content, ContainerText, Button } from './HeroSection.styles';
import HeroImage from "../../assets/psi-laura.jpeg?url";
import { BsCalendarHeart } from "react-icons/bs";
import Divider from '../../components/Divider';

const HeroSection = () => {
  return (
    <>
      <HeroSectionContainer>
        <img
          src={HeroImage}
          alt="Imagem da Psicóloga Laura"
          width={470}
          loading="lazy"
        />
        <Content>
          <ContainerText>
            <h1>Seja bem-vindo(a)!</h1>
            <p>
             Minha abordagem terapêutica é fundamentada em evidências científicas e focada em resultados, garantindo um processo seguro, respeitoso e personalizado para cada pessoa. Trabalho seguindo a abordagem cognitivo comportamental, com psicoterapia individual para adolescentes e adultos. Ofereço sessões semanais, com duração de 50 minutos, de forma online ou presencial em Uberlândia - MG.
            </p>
          </ContainerText>
          <Button href="/">
            Agende sua sessão agora! <BsCalendarHeart size={18} />
          </Button>
        </Content>
      </HeroSectionContainer>
      <Divider />
    </>
  );
};

export default HeroSection;
