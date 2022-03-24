import React, { useEffect, useLayoutEffect } from 'react';
import './App.css';
import Main from './components/Main';
import configureAxios from './utils/axios/configureAxios';

function App() {

  //Тот же useEffect только синхронный
  useLayoutEffect(() => {
    configureAxios()
  }, [])


  return (
    <div className="App">
      <header className="App-header">

        <Main />
        {/* <img src={logo} className="App-logo" alt="logo"/> */}


      </header>
    </div>
  )
}


export default App;
