import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import ProjectCard from '../ProjectCard';
import { Container } from './style';

const Projects = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.projects}>
      <h1>Projects</h1>
      <div className="cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Container>
  );
};

export default Projects;
