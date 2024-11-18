import './App.css';
import React, { useCallback, useMemo, useState } from 'react';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function useCallbackMemoComp() {
  const [counter, setCounter] = useState(0);

  const incrementButton = useCallback((num) => {
    setCounter((c) => {
      c + num;
    });
  }, []);

  const btn = useMemo(() => {
    console.log('renderizou button');
    return <Button incrementButton={incrementButton} />;
  }, [incrementButton]);

  return (
    <div className="App">
      <h1>Teste {counter}</h1>
      {btn}
    </div>
  );
}

export default useCallbackMemoComp;
