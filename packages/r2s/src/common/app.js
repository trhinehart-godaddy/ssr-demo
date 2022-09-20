import { version } from 'react';

import Counter from './counter';

export default function App() {
  return (
    <>
      <h1>React@{ version } renderToString Demo</h1>
      <Counter/>
    </>
  );
}
