
import { useState } from 'react';
import './App.css';
import Value from './components/Array';

function App() {
  const [display , setDisplay] = useState(1234)
  function incrementDisplay()
  {
    setDisplay(display+1)
  }
  const decrementDisplay = () =>
  {
    setDisplay(display-1)
  }

  return (
    <div className="App">
<h3>{display}</h3> 
<button onClick={incrementDisplay}> Increase</button>
<button onClick={decrementDisplay}> decrease</button>
<Value></Value>
    </div>
  );
}

export default App;
