import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { useToggle } from './components/Toggle';

function App() {
  const [count, setCount] = useState(0);
  const { on, toggle } = useToggle();
  const [step, setStep] = useState(1);
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  const handleIncrementByStep = (step: number) => {
    setCount((c) => c + step);
  };
  const handleDecrementByStep = (step: number) => {
    setCount((c) => c - step);
  };

  const handleStepValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const n = event.target.valueAsNumber;
    if (n <= 0) return;
    setStep(n);
  };

  return (
    <>
      <div>
        <div className="input-component">
          <label className="label" htmlFor="step">
            Step:
          </label>
          <input
            className="input"
            type="number"
            name="step"
            id="step"
            value={step}
            onChange={handleStepValue}
          />
        </div>
        <Counter
          count={count}
          step={step}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onIncrementByStep={handleIncrementByStep}
          onDecrementByStep={handleDecrementByStep}
        />
      </div>
      <div>
        <div>Status: {on ? 'ON' : 'OFF'}</div>
        <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
      </div>
    </>
  );
}

export default App;
