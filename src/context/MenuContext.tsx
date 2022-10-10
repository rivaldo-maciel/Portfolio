import menuContext from './menuContext';
import { ReactNode, useState } from 'react';

type props = {
  children: ReactNode;
}

const MenuContext = (props: props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <menuContext.Provider
      value={{ isActive, setIsActive }}
    >
      {
        props.children
      }
    </menuContext.Provider>
  )
}

export default MenuContext;