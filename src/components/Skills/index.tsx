import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import SkillCard from '../SkillCard';
import { Container } from './style';
import { icons } from './style';

const Skills = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.mySkills}>
      <h1>My Skills</h1>
      <div className="skills-container">
        {icons.map(({ icon, name }) => (
          <SkillCard Icon={icon} name={name} key={name} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
