import type React from 'react';
import './Counter.css';

export interface CounterProps {
  count: number;
  step: number;

  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementByStep: (step: number) => void;
  onDecrementByStep: (step: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  count,
  step,
  onIncrement,
  onDecrement,
  onIncrementByStep,
  onDecrementByStep,
}: CounterProps) => {
  const handleIncrement = () => {
    onIncrement();
  };

  const handleDecrement = () => {
    onDecrement();
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => onIncrementByStep(step)}>+{step}</button>
      <button onClick={() => onDecrementByStep(step)}>-{step}</button>
    </div>
  );
};
