import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Configuration from './components/calibration/Configuration';
import Test from './components/Test';
import Main from './components/Main';

class App extends React.Component{
  render() {
    return(
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo"/>

          <Main/>

          <Test/>

          <Counter />

          <Configuration/>

        </header>
      </div>
    )

  }
}

export default App;
