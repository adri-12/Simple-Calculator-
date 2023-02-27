import './App.css';
import { useReducer } from 'react';

function App() {

  return (
    <div className="App">
<div className='calculator-grid'>
  <div className='output'>
    <div className='previous-operand'>123 +</div>
    <div className='current-operand'>456</div>
  </div>
  <button className='span-two'>AC</button>
  <button>DEL</button>
  <button data-operation>`-`</button>
  <button data-number>1</button>
  <button data-number>2</button>
  <button data-number>3</button>
  <button data-operation>*</button>
  <button data-number>4</button>
  <button data-number>5</button>
  <button>6</button>
  <button data-operation>+</button>
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button data-operation>-</button>
  <button>.</button>
  <button>0</button>
  <button className='span-two'>=</button>
</div>
    </div>
  );
}

export default App;
