import menuContext from './menuContext';
import { ReactNode, useRef, useState } from 'react';

type props = {
  children: ReactNode;
}

const MenuContext = (props: props) => {
  const [isActive, setIsActive] = useState(false);
  const aboutMeRef = useRef<null | HTMLElement>(null);
  const mySkillsRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);
  const certificationsRef = useRef<null | HTMLElement>(null);

  const refs = {
    aboutMe: aboutMeRef,
    mySkills: mySkillsRef,
    projects: projectsRef,
    certifications: certificationsRef
  }
  return (
    <menuContext.Provider
      value={{ isActive, setIsActive, refs }}
    >
      {
        props.children
      }
    </menuContext.Provider>
  )
}

export default MenuContext;