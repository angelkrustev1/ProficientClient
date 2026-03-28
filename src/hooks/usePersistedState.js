import { useState } from 'react';

export default function usePersistedState(stateKey, initialState) {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(stateKey);

    if (!persistedState) {
      return typeof initialState === 'function'
        ? initialState()
        : initialState;
    }

    return JSON.parse(persistedState);
  });

  const setPersistedState = (value) => {
    setState((prevState) => {
      const newState =
        typeof value === 'function' ? value(prevState) : value;

      localStorage.setItem(stateKey, JSON.stringify(newState));
      return newState;
    });
  };

  return [state, setPersistedState];
}