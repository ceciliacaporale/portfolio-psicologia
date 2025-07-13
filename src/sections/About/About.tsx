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

const services = [
  { icon: <FaCheckCircle size={14} />, label: "CRP 04/80236" },
  { icon: <FaRegBuilding size={14} />, label: "Atendimento Presencial" },
  { icon: <FaLaptop size={14} />, label: "Atendimento Online" },
  { icon: <FaBookOpen size={14} />, label: "Terapia Cognitivo Comportamental (TCC)" },
  { icon: <FaUsers size={14} />, label: "Terapia Comportamental Dialética (DBT)" },
];

const About = () => {
  return (
    <AboutContainer id="sobre">
      <ContainerImage>
        <img
          src={HeroImage}
          alt="Imagem da Psicóloga Laura"
          width={400}
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
          Minha abordagem terapêutica é fundamentada em evidências científicas e focada em resultados, garantindo um processo seguro, respeitoso e personalizado para cada pessoa. Trabalho com psicoterapia individual para adolescentes e adultos, oferecendo sessões semanais, com duração de 50 minutos, de forma online ou presencial em Uberlândia - MG.
        </p>

        <div className="services">
          {services.map(({ icon, label }, idx) => (
            <div className="service" key={idx}>
              {icon}
              <h4>{label}</h4>
            </div>
          ))}
        </div>

        <Button href="/">
          Saiba mais
        </Button>
      </ContainerText>
    </AboutContainer>
  );
};

export default About;
