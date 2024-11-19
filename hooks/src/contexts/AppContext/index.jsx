import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = (props) => {
  const [state, setState] = useState(globalState);
  return (
    // eslint-disable-next-line
    <GlobalContext.Provider value={{ state, setState }}>{props.children}</GlobalContext.Provider>
  );
};
