import { Container, ViewButtonsContainer } from './style';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';

type props =  {
  title: string;
  src: string;
  isDeployed: boolean;
  deployLink: string;
  repoLink: string;
}

const ProjectCard = ({ title, src, isDeployed, deployLink, repoLink }: props) => {
  return (
    <Container src={src}>
      <div className="card-container">
        <ViewButtonsContainer>
          {
            isDeployed && (
              <a href={deployLink} target="blank">
                <BsFillEyeFill size={30}/>
              </a>
            )
          }
          <a href={repoLink} target=" blank">
            <BsGithub size={30}/>
          </a>
        </ViewButtonsContainer>
      </div>
      <h3>{ title }</h3>
    </Container>
  );
};

export default ProjectCard;
