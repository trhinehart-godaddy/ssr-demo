import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: { count }
      <br/>
      <button onClick={ () => setCount(count => count + 1) }>Increment</button>
    </>
  );
}
