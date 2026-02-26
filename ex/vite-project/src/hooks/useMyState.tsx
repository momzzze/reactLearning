import { useReducer, useRef } from 'react';

function useMyState<T>(initValue: T): [T, (newValue: T) => void] {
  const valueRef = useRef(initValue); //persist value across renders
  const [, forceUpdate] = useReducer((x) => x + 1, 0); //force update component

  const setValue = (newValue: T) => {
    if (typeof newValue === 'function') {
      valueRef.current = (newValue as (prev: T) => T)(valueRef.current);
    } else {
      valueRef.current = newValue;
    }
    forceUpdate(); //trigger a re-render
  };

  return [valueRef.current, setValue] as const;
}

export default useMyState;
