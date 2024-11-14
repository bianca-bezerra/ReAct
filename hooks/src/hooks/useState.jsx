import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const useStateComp = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'reverse' : '';
  function handleClick() {
    setReverse(!reverse);
  }

  function handleIncrement() {
    setCounter((prevState) => prevState++);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>Contador {counter}</p>
        <button onClick={handleClick} type="button">
          Reverse logo
        </button>
        <button onClick={handleIncrement} type="button">
          Increment
        </button>
      </header>
    </div>
  );
};
