import { HeroSectionContainer, Content, ContainerText, Button } from './HeroSection.styles';
import HeroImage from "../../assets/psi-laura.jpeg?url";
import { BsCalendarHeart } from "react-icons/bs";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
         <img 
            src={HeroImage} 
            alt={'Imagem da Psicologa Laura'} 
            width={470} 
            height={600}
            loading="lazy"
          />
          <Content>
          <ContainerText>
          <h1>Seja bem vindo(a)!</h1>
          <p>
Meu nome é Laura Lacerda, sou psicóloga clínica (CRP 04/80236) e o meu objetivo é conduzir uma prática respeitosa, com conexão e humanidade. Vejo a psicoterapia como um processo que auxilia em direção a uma vida com propósito, ajudando a tomar decisões que nos aproximam daquilo que é importante para nós.
          </p>
          </ContainerText>
          <Button href="/">
            Agende sua sessão agora! <BsCalendarHeart size={18} style={{ marginLeft: '8px' }} />
          </Button>
          </Content>
    </HeroSectionContainer>
  );
}

export default HeroSection;
