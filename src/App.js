
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllConfiguration } from './API/configuration/generalConfiguration';
import { getAllFlowMeter } from './API/flowMeter/generalFlowMeter';
import { CheckLogin } from './API/login';
import { getAllMain } from './API/main/generalMain';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import configureAxios from './utils/axios/configureAxios';

function App() {

  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(false)

  //Тот же useEffect только синхронный
  useLayoutEffect(() => {
    configureAxios()
  }, [])

  //подписка на проверку авторизации
  useEffect(()=> {
    dispatch(CheckLogin())
            .unwrap()
            .then((check) => {
              console.log("check ", check)
              setLogin(check)
            })
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
