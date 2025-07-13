import { AboutContainer, ContainerText, Button, BrandIcon, ContainerImage } from './About.styles';
import HeroImage from "../../assets/lauralacerda.jpeg?url";
import { FaRegBuilding, FaLaptop, FaBookOpen, FaCheckCircle, FaUsers } from "react-icons/fa";
import Brand from "../../assets/iconepsi.png?url";
const About = () => {
  return (
    <AboutContainer id="sobre">
    <ContainerImage>
      <img 
        src={HeroImage} 
        alt={'Imagem da Psicóloga Laura'} 
        width={400} 
        loading="lazy"
        className="main-image"
      />

      <BrandIcon>
      <img 
        src={Brand} 
        alt={'Imagem da Psicóloga Laura'} 
        width={110} 
        height={110}
        loading="lazy"
        className="mobile-image"
        />
      </BrandIcon>
    </ContainerImage>
      <ContainerText>
        <h2>Como funciona meu trabalho?</h2>
        <p>
          Minha abordagem terapêutica é fundamentada em evidências científicas e focada em resultados, garantindo um processo seguro, respeitoso e personalizado para cada pessoa. Trabalho com psicoterapia individual para adolescentes e adultos, oferecendo sessões semanais, com duração de 50 minutos, de forma online ou presencial em Uberlândia - MG.
        </p>
        
        <div className="services">
          <div className="service">
            <FaCheckCircle size={14} />
            <h4>CRP 04/80236</h4>
          </div>
          <div className="service">
            <FaRegBuilding size={14} />
            <h4>Atendimento Presencial</h4>
          </div>
          <div className="service">
            <FaLaptop size={14} />
            <h4>Atendimento Online</h4>
          </div>
          <div className="service">
            <FaBookOpen size={14} />
            <h4>Terapia Cognitivo Comportamental (TCC)</h4>
          </div>
          <div className="service">
            <FaUsers size={14} />
            <h4>Terapia Comportamental Dialética (DBT)</h4>
          </div>
        </div>
        <Button href="/">
          Saiba mais
        </Button>
      </ContainerText>
     
    </AboutContainer>
  );
};

export default About;