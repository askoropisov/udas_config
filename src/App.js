import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Calibration from './components/calibration/Calibration';
import Test from './components/Test';

class App extends React.Component{
  render() {
    return(
      <div>
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo"/>

          <Test/>

          <Counter />

          <Calibration />

        </header>
      </div>
    </div>
    )

  }
}

export default App;
