import React, { useState } from 'react';
import Character from './components/Character/index';

function App() {

  const [model, setModel] = useState(false)

  const displayModel = (event) => (
    event.preventDefault()
  ) 


  return (
    <div className="App">
      { model ? <Character/> : null }
      <button onClick={() => setModel(!model)}>Model </button> 
    </div>
  );
}

export default App;
