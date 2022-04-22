import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
};

const Application = () => {
  const [name, setName] = useState('')
  // your code here

  const reset = () => {
    setName("")
    // your code here
  };

  return (
    <main>
      <input value={name} onChange={event => setName(event.target.value)} placeholder={"Type your name"}></input>
      <button onClick={reset}>Reset</button>
      {name && <h1 >Hello {name}</h1>}

    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
