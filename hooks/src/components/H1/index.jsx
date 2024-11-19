import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
  const {
    state: { title, counter },
  } = useContext(GlobalContext);
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
