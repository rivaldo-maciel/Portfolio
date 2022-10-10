import { createContext, Dispatch, SetStateAction } from 'react';

type menuContextType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const menuContext = createContext<menuContextType |  null>(null);

export default menuContext;