/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useContext, useRef } from 'react';
import P from 'prop-types';
import './App.css';

// actions.js
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const globalState = {
  title: 'testando',
  body: 'teste body',
  counter: 0,
};

// reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const { changeTitle } = context;
  const inputRef = useRef();
  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// AppContext
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// App.jsx
function useReducerContextComp() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default useReducerContextComp;
