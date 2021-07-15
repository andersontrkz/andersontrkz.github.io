import Context from './Context';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

export default function Provider({ children }) {
  const [switchOn, setSwitchOn] = useLocalStorage('switchOn', false);
  const [backdrop, setBackdrop] = useState(false);

  const context = {
    switchOn,
    setSwitchOn,
    backdrop,
    setBackdrop,
  }

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}