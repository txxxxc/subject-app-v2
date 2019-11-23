/* eslint-disable react/prop-types */
import React, { useState, useCallback, FC } from 'react';

export interface ExampleProps {
  text: string;

  flag?: boolean;
  action(): void;
}

export const Example: FC<ExampleProps> = props => {
  const { text, flag, action } = props;
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(prev => prev + 1), []);
  const countDown = useCallback(() => setCount(prev => prev - 1), []);

  return (
    <div>
      {flag && <p>{text}</p>}
      <button onClick={action}>ボタン</button>
      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
