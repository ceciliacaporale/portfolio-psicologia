import { DoubtsContainer } from './Doubts.styles';
import Accordion from "../../components/Accordion";
import { ContainerBackground } from '../../components/Footer/Footer.styles';

const duvidas = [
  {
    title: "Quando procurar por terapia?",
    content: "Você pode procurar um psicólogo sempre que estiver passando por dificuldades emocionais intensas e persistentes como tristeza, ansiedade, sensação de vazio/sobrecarga. Problemas de concentração, sono, apetite, falta de motivação para atividades que antes eram prazerosas, mudanças importantes na vida e mudanças no comportamento como isolamento social, aumento do uso de álcool/drogas, impulsividade. Além disso, problemas de relacionamento, dificuldade em comunicar e estabelecer vínculos saudáveis e senso de propósito.",
  },
  {
    title: "Você atende convênios?",
    content: "Atualmente as sessões são particulares, mas forneço recibos que podem ser utilizados para solicitar reembolso ao seu plano de saúde, caso ofereça essa possibilidade. O serviço é prestado em forma de assinatura mensal que inclui 4 sessões de psicoterapia semanais em horário fixo. Para consultar os valores entre em contato.",
  },
  {
    title: "Qual é a frequência e duração das sessões?",
    content: "As sessões são semanais com duração de 50 minutos. A duração do processo terapêutico varia de pessoa para pessoa, a depender da demanda e do progresso.  Todo o processo é acompanhado e ajustado conforme necessário.",
  },
  {
    title: "O que é a TCC?",
    content:"A Terapia Cognitivo-Comportamental (TCC) é uma abordagem da psicologia que entende que nossos pensamentos, emoções e comportamentos estão interligados. O processo terapêutico é baseado na identificação de pensamentos disfuncionais, suas crenças e padrões de comportamento que estão atuando na manutenção do sofrimento. Assim, o paciente será guiado para aprender a desenvolver, de forma colaborativa com o terapeuta, formas mais equilibradas de pensar e se comportar diante das situações do dia a dia. A TCC é estruturada, focada no presente e voltada para a resolução de problemas, sendo eficaz para ansiedade, depressão, fobias, entre outros. Além disso, monitora continuamente o progresso do paciente, tendo como objetivo a promoção de qualidade de vida e autonomia.",
  },
  { 
    title: "O que é DBT?",
    content: "A DBT (Terapia Comportamental Dialética) é uma abordagem terapêutica baseada na ciência do comportamento, especialmente indicada para pessoas que sentem emoções com muita intensidade e têm dificuldade para lidar com elas de forma equilibrada. É indicada para pessoas que enfrentam comportamentos impulsivos, autolesivos, dificuldades nos relacionamentos ou episódios emocionais muito intensos.Tem como foco promover aceitação e mudança. O paciente aprende a acolher suas emoções e sua história com compaixão, ao mesmo tempo em que desenvolve habilidades práticas para lidar com a causa do sofrimento. Durante o processo terapêutico, serão trabalhados 4 conjuntos de habilidades: mindfulness, regulação emocional, tolerância ao mal-estar e habilidades interpessoais."
  },
];

const Doubts = () => (
  <ContainerBackground>
  <DoubtsContainer id="duvidas">
    <h2>Dúvidas Frequentes</h2>
    <Accordion items={duvidas} />
  </DoubtsContainer>
  </ContainerBackground>
);

export default Doubts;