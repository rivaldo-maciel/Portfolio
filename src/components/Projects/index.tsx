import { useContext } from 'react';
import { device } from '../../breakpoints';
import menuContext from '../../context/menuContext';
import ProjectCard from '../ProjectCard';
import { projects } from './data';
import { Container } from './style';

const Projects = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.projects} device={device}>
      <h1 data-aos="fade-up">Projects</h1>
      <div className="cards-container" data-aos="fade-up">
        {projects.map(({ title, src, isDeployed, deployLink, repoLink }) => (
          <ProjectCard
            title={title}
            src={src}
            isDeployed={isDeployed}
            deployLink={deployLink}
            repoLink={repoLink}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
