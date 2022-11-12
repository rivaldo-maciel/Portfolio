import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import SkillCard from '../SkillCard';
import { Container } from './style';
import { icons } from './style';
import { device } from '../../breakpoints';

const Skills = () => {
  const context = useContext(menuContext);

  return (
    <Container device={device} ref={context?.refs.mySkills}>
      <h1 data-aos="fade-up">My Skills</h1>
      <div className="skills-container" data-aos="fade-up">
        {icons.map(({ icon, name }) => (
          <SkillCard Icon={icon} name={name} key={name} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
