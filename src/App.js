import React from 'react';
import './style.css';
import { split } from 'shlex';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {console.log(split('ls -al / "dsfsfsf fgfddg gfd fdgfdg "'))}
    </div>
  );
}
