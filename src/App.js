import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

class App extends React.Component{
  render() {
    return(
      <div className="App">
        <header className="App-header">
          
          <Main/>
          <img src={logo} className="App-logo" alt="logo"/>


        </header>
      </div>
    )

  }
}

export default App;
