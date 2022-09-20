import { version } from 'react';

export default function App() {
  return (
    <>
      <h1>React@{ version } renderToStaticMarkup Demo</h1>
      Count: <span id="count">0</span>
      <br/>
      <button id="inc">Increment</button>
    </>
  );
}
