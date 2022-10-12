import SkillCard from '../SkillCard';
import { Container } from './style';
import { icons } from './style';

const Skills = () => {
  return (
    <Container>
      <h1>My Skills</h1>
      <div className="skills-container">
        {
          icons.map(({ icon, name }) => (
            <SkillCard Icon={icon} name={name} key={name}/>
          ))
        }
      </div>
    </Container>
  );
};

export default Skills;
