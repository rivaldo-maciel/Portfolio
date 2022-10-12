import ProjectCard from '../ProjectCard';
import { Container } from './style';

const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <div className="cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Container>
  )
}

export default Projects;