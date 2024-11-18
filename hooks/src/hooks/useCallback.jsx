import './App.css';
import React, { useCallback, useState } from 'react';
import P from 'prop-types';

// const Button = ({ incrementButton }) => {
//   // return <button onClick={() => incrementButton(10)}>+</button>;
// };

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function useCallbackComp() {
  const [counter, setCounter] = useState(0);

  // const incrementButton = (num) => {
  //   setCounter(counter + num);
  // };

  const incrementButton = useCallback((num) => {
    setCounter((c) => {
      c + num;
    });
  }, []);

  return (
    <div className="App">
      <h1>Teste {counter}</h1>
      <Button incrementButton={incrementButton} />
    </div>
  );
}

export default useCallbackComp;
