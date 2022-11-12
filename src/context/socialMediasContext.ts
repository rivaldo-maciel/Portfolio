import { createContext, Dispatch, SetStateAction } from 'react';

type SocialMediasContextType = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const socialMediasContext = createContext<SocialMediasContextType |  null>(null);

export default socialMediasContext;