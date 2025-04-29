import { AboutContainer, ContainerText, Button } from './About.styles';
import HeroImage from "../../assets/lauralacerda.jpeg?url";
import { FaRegBuilding, FaLaptop, FaBookOpen, FaCheckCircle, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer>
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

      <img 
        src={HeroImage} 
        alt={'Imagem da Psicóloga Laura'} 
        width={430} 
        height={550}
        loading="lazy"
      />
    </AboutContainer>
  );
};

export default About;