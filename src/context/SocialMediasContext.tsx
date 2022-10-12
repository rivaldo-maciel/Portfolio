import socialMediasContext from './socialMediasContext';
import { ReactNode, useState } from 'react';

type props = {
  children: ReactNode;
}

const SocialMediasContext = (props: props) => {
  const [isVisible, setIsVisible] = useState(true);
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