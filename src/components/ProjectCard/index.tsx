import { Container, ViewButtonsContainer } from './style';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';

const ProjectCard = () => {
  return (
    <Container>
      <div className="card-container">
        <ViewButtonsContainer>
          <BsFillEyeFill size={30}/>
          <BsGithub size={30}/>
        </ViewButtonsContainer>
      </div>
      <h3>Pokedex</h3>
    </Container>
  );
};

export default ProjectCard;
