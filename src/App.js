import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Configuration from './components/calibration/Configuration';
import Test from './components/Test';

class App extends React.Component{
  render() {
    return(
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo"/>

          <Test/>

          <Counter />

          <Configuration/>

        </header>
      </div>
    )

  }
}

export default App;
