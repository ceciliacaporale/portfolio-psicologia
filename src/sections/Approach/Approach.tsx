import { ApproachContainer } from './Approach.styles';
import DisplayCardList from '../../components/DisplayCard';

const Approach = () => {
  return (
    <ApproachContainer>
        <h3>Fundamentos da Minha Prática Terapêutica</h3>
        <p>Minha prática é baseada em três pilares principais:</p>
    <DisplayCardList />
    </ApproachContainer>
  );
};

export default Approach;