import { HeroSectionContainer, Content, ContainerText, Button } from './HeroSection.styles';
import HeroImage from "../../assets/psi-laura.jpeg?url";
import { BsCalendarHeart } from "react-icons/bs";
import Divider from '../../components/Divider';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';

const HeroSection = () => {
  return (
    <>
      <HeroSectionContainer>
        <ScrollAnimation>
        <img
          src={HeroImage}
          alt="Psicóloga Uberlândia Laura Lacerda"
          width={470}
          height={600}
          loading="lazy"
          />
          </ScrollAnimation>
        <Content>
          <ScrollAnimation delay={0.2}>
          <ContainerText>
            <h1 className="visually-hidden">Psicóloga em Uberlândia | Laura Lacerda Psicóloga</h1>
            <h2>Seja bem-vindo(a)!</h2>
            <p>
Meu nome é Laura Lacerda, sou psicóloga clínica (CRP 04/80236) e o meu objetivo é conduzir uma prática respeitosa, com conexão e humanidade. Vejo a psicoterapia como um processo que auxilia em direção a uma vida com propósito, ajudando a tomar decisões que nos aproximam daquilo que é importante para nós.            </p>
          </ContainerText>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
          <Button href="https://wa.me/5534984146045?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20psicoterapia." target='_blank'>
            Agende sua sessão agora! <BsCalendarHeart size={18} />
          </Button>
          </ScrollAnimation>
        </Content>
      </HeroSectionContainer>
      <Divider />
    </>
  );
};

export default HeroSection;
