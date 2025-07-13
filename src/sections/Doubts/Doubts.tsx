import { DoubtsContainer } from './Doubts.styles';
import Accordion from "../../components/Accordion";

const duvidas = [
  {
    title: "Quando procurar por terapia?",
    content: "Você pode procurar um psicólogo sempre que estiver passando por dificuldades emocionais intensas e persistentes como tristeza, ansiedade, sensação de vazio/sobrecarga. Problemas de concentração, sono, apetite, falta de motivação para atividades que antes eram prazerosas, mudanças importantes na vida e mudanças no comportamento como isolamento social, aumento do uso de álcool/drogas, impulsividade. Além disso, problemas de relacionamento, dificuldade em comunicar e estabelecer vínculos saudáveis e senso de propósito.",
  },
  {
    title: "Você atende convênios?",
    content: "Atualmente as sessões são particulares, mas forneço recibos que podem ser utilizados para solicitar reembolso ao seu plano de saúde, caso ofereça essa possibilidade.",
  },
  {
    title: "Qual é a frequência e duração das sessões?",
    content: "As sessões são semanais com duração de 50 minutos. A duração do processo terapêutico varia de pessoa para pessoa, a depender da demanda e do progresso.  Todo o processo é acompanhado e ajustado conforme necessário.",
  },
];

const Doubts = () => (
  <DoubtsContainer id="duvidas">
    <h2>Dúvidas Frequentes</h2>
    <Accordion items={duvidas} />
  </DoubtsContainer>
);

export default Doubts;