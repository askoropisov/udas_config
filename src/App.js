
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllConfiguration } from './API/configuration/generalConfiguration';
import { getAllFlowMeter } from './API/flowMeter/generalFlowMeter';
import { getAllMain } from './API/main/generalMain';
import './App.css';
import Main from './components/Main';
import configureAxios from './utils/axios/configureAxios';

function App() {

  const dispatch = useDispatch();

  //Тот же useEffect только синхронный
  useLayoutEffect(() => {
    configureAxios()
  }, [])

  //подписка на общие запросы 
  useEffect(() => {
    dispatch(getAllFlowMeter())

  }, [])

  useEffect(() => {
    dispatch(getAllConfiguration())
  }, [])

  useEffect(() => {
    dispatch(getAllMain())
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {isLogin ?
          <Main />
          :
          <Login />
        }
      </header>
    </div>
  )
}


export default App;
