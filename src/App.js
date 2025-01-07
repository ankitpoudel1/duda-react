import React from 'react';
import './App.css';
import { Simple } from './Simple';
function App(props) {
  const showAlert = () => {
    alert('Hello from React!');
  };

  return (
    <>
    <div className="App">
      <h1>Welcome to My Duda Widget Built in React {props.title}</h1>
      <button onClick={showAlert}>Click Me</button>
    <Simple />

    </div>
      </>

  );
}

export default App;
