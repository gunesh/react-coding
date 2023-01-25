import React from 'react';
import './style.css';
import { split } from 'shlex';
import Input from './Components/Autosuggest/Input';
import Autocomplete from './Components/Autosuggest/Test';
import Transition from './Components/CSSTransition';
import { options } from './Data/data';
import Example from './Components/imageSlider';
import MultipleItems from './Components/Slide/Slide';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1> */}
      <p>Start editing to see some magic happen :)</p>
      <Example />
      {/*   {console.log(split('ls -al / "dsfsfsf fgfddgg"'))} */}
      {/* <Input placeholder="Enter Value" /> */}
      {/* <Autocomplete options={options} />
      <MultipleItems />
      <Transition /> */}
    </div>
  );
}
