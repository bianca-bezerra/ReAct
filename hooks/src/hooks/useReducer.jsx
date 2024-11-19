import React, { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'testando',
  body: 'teste body',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou a muda', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      const { title } = state;
      console.log('Chamou inverter');
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function useReducerComp() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <h3>{counter}</h3>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString(),
          })
        }
      >
        Click me
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert me</button>
    </div>
  );
}

export default useReducerComp;
