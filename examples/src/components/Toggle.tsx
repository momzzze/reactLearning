import { useCallback, useState } from 'react';
// import './Toggle.css';

// export const Toggle: React.FC = (): JSX.Element => {
//   const [on, setOn] = useState(false);
//   const toggle = () => setOn((o) => !o);
//   return (
//     <>
//       <div>Status: {on ? 'ON' : 'OFF'}</div>
//       <button type="button" className="toggleButton" onClick={toggle}>
//         {on ? 'On' : 'Off'}
//       </button>
//     </>
//   );
// };

//as hook version

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  const setTrue = useCallback(() => setOn(true), []);
  const setFalse = useCallback(() => setOn(false), []);
  return { on, toggle, setTrue, setFalse };
}
