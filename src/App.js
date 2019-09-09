import React from 'react';

import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import Form from './components/Form';
import FormHook from './components/FormHook';
import Giphy from './components/Giphy';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>OLD WAY</p>
      <Counter />
      <Form />
      <p>NEW WAY</p>
      <CounterHook />
      <FormHook />
      <Giphy />
    </div>
  );
}

export default App;
