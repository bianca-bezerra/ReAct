import React, { createContext, useContext, useState } from 'react';
import './App.css';

const GlobalContext = createContext();
const context = {
  title: 'teste',
  body: 'teste body',
  counter: 0,
};

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext;

  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body} {counter}
    </p>
  );
};

const H1 = () => {
  const {
    contextState: { title, counter },
  } = useContext(GlobalContext);
  return (
    <h1>
      {title}
      {counter}
    </h1>
  );
};

function useContextComp() {
  const [contextState, setContextState] = useState(context);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default useContextComp;
