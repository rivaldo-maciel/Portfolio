import { useContext } from 'react';
import { device } from '../../breakpoints';
import menuContext, { Refs } from '../../context/menuContext';
import { Container } from './style';

const MenuLinks = () => {
  const context = useContext(menuContext);
  return (
    <Container device={device}>
        {[{ name: 'Home', ref: 'home' },
          { name: 'About Me', ref: 'aboutMe' },
          { name: 'My Skills', ref: 'mySkills' },
          { name: 'Projects', ref: 'projects' },
          { name: 'Certifications', ref: 'certifications' }
        ].map(({ name, ref }) => (
          <li key={name}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                const refs = context?.refs;
                if (refs) {
                  const currRef = refs[ref as keyof Refs];
                  currRef.current?.scrollIntoView({ behavior: 'smooth' });
                  context.setIsActive(false);
                }
              }}
            >
              {name}
            </a>
          </li>
        ))}
    </Container>
  )
}

export default MenuLinks;