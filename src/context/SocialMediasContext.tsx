import socialMediasContext from './socialMediasContext';
import { ReactNode, useState } from 'react';

type props = {
  children: ReactNode;
}

const SocialMediasContext = (props: props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <socialMediasContext.Provider
      value={{ isVisible, setIsVisible }}
    >
      {
        props.children
      }
    </socialMediasContext.Provider>
  )
}

export default SocialMediasContext;