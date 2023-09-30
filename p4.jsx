import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/header';


 function App() {
  
  const [showExample, setShowExample] = useState(true);

  const toggleView = () => {
    setShowExample(!showExample);
  };
  const statesData = window.models.states() || [];

  console.log(statesData);
  
  return (
    <div>
      <Header/>
       <button id="switchButton" onClick={toggleView}>
        {showExample ? 'Switch to States' : 'Switch to Example'}
      </button>
      {showExample ? <Example /> : <States />}
     
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
