import { useEffect, useState } from 'react';

export const useEffectComp = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function func() {
    console.log('h1 clicado');
  }

  //did update
  useEffect(() => {
    console.log('update');
  });

  //did mount
  useEffect(() => {
    console.log('mount');
  }, []);

  //dependency changes
  useEffect(() => {
    console.log('counter changed', counter);
  }, [counter]);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', func);

    //suposta "limpeza" quando o comp unmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', func);
    };
  }, []);

  return (
    <div className="App">
      {/* <h1>Counter {counter}</h1> */}
      <h1>Teste 1</h1>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
};
