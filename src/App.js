import React from 'react';
import './style.css';
import { split } from 'shlex';
import Input from './Components/Autosuggest/Input';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {console.log(split('ls -al / "dsfsfsf fgfddgg"'))}
      <Input placeholder="Enter Value" />
    </div>
  );
}
