

function Login(props) {



    return(
        <div>
            <br></br>
            <h1>Авторизация</h1>
            <br></br>
            <br></br>
            <input id="login" value={Login} type={'text'}
                onChange={(e) => dispatch(setLogin(e.target.value))}></input>
            <input id="password" value={Password} type={'password'}
                onChange={(e) => dispatch(setPassword(e.target.value))}></input>
        </div>
    )
}