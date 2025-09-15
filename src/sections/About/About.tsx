import {
  AboutContainer,
  ContainerText,
  Button,
  BrandIcon,
  ContainerImage,
} from './About.styles';
import HeroImage from "../../assets/lauralacerda.jpeg?url";
import Brand from "../../assets/iconepsi.png?url";
import {
  FaRegBuilding,
  FaLaptop,
  FaBookOpen,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { ContainerBackground } from '../../components/Footer/Footer.styles';

const services = [
  { icon: <FaCheckCircle size={14} />, label: "CRP 04/80236" },
  { icon: <FaRegBuilding size={14} />, label: "Atendimento Presencial" },
  { icon: <FaLaptop size={14} />, label: "Atendimento Online" },
  { icon: <FaBookOpen size={14} />, label: "Terapia Cognitivo Comportamental (TCC)" },
  { icon: <FaUsers size={14} />, label: "Terapia Comportamental Dialética (DBT)" },
];

const About = () => {
  return (
    <ContainerBackground>
    <AboutContainer id="sobre">
      <ContainerImage>
        <img
          src={HeroImage}
          alt="Imagem da Psicóloga Laura"
          width={400}
          height={499}
          loading="lazy"
          className="main-image"
        />
        <BrandIcon>
          <img
            src={Brand}
            alt="Ícone da Psicologia"
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
           Minha abordagem terapêutica é fundamentada em evidências científicas e focada em resultados, garantindo um processo seguro, respeitoso e personalizado para cada pessoa. Trabalho seguindo a abordagem cognitivo comportamental, com psicoterapia individual para adolescentes e adultos. Ofereço sessões semanais, com duração de 50 minutos, de forma online ou presencial em Uberlândia - MG.
        </p>

        <div className="services">
          {services.map(({ icon, label }, idx) => (
            <div className="service" key={idx}>
              {icon}
              <h3>{label}</h3>
            </div>
          ))}
        </div>

        <Button href="https://wa.me/5534984146045?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20psicoterapia." target='_blank'>
          Saiba mais
        </Button>
      </ContainerText>
    </AboutContainer>
    </ContainerBackground>
  );
};

export default About;
