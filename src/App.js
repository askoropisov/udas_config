import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Calibration from './components/calibration/Calibration';

function App() {
  return (

    <>
      <Counter />
    </>
    // <div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <Counter />

    //       <Calibration />

    //     </header>
    //   </div>
    //   <button>rfh</button>
    // </div>
  );
}

export default App;
