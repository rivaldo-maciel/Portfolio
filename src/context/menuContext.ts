import { createContext, Dispatch, SetStateAction } from 'react';

type menuContextType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  refs: Refs;
}

export type Refs = {
  home: React.MutableRefObject<null | HTMLElement>,
  aboutMe: React.MutableRefObject<null | HTMLElement>,
  mySkills: React.MutableRefObject<null | HTMLElement>,
  projects: React.MutableRefObject<null | HTMLElement>,
  certifications: React.MutableRefObject<null | HTMLElement>
}

const menuContext = createContext<menuContextType |  null>(null);

export default menuContext;