
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { Autorization } from '../API/login';
import logo from './Logo.png'

function Login(props) {

    const dispatch = useDispatch();

    const [Login, setLogin] = useState("") 
    const [Password, setPassword] = useState("")

    const haldleAutorization = () => {
        const data = {
            login: Login,
            password: Password,
        }
        dispatch(Autorization(data))
        setTimeout(function(){
            window.location.reload();
        }, 500)

    }

    return (
        <div>
            <br></br>
            <br></br>
            <img src={logo} width="600" alt="Amplituda logo"></img>
            <br></br>
            <br></br>
            <h1>Авторизация</h1>
            <br></br>
            <div>
                <label>Логин</label><br></br>
                <input id="login" value={Login} type={'text'} className="input"
                        style={{ width: "16ch"}}
                    onChange={(e) => dispatch(setLogin(e.target.value))}></input>
                    <br></br>
                <label>Пароль</label><br></br>
                <input id="password" value={Password} type={'password'}
                        className="input" style={{ width: "16ch"}}
                    onChange={(e) => dispatch(setPassword(e.target.value))}></input>
                    <br></br>
                    <br></br>
                <Button onClick={haldleAutorization} style={{ width: "18ch", height: "6ch"}}>Войти</Button>
            </div>
        </div>
    )
}

export default Login