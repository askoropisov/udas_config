function Test() {


    return (
        <div>
            
            {/* Ссылка */}
            <a href="https://yandex.ru/images/search?from=tabbar&text=котики">
                Котики
                {/* <img src="C:\Code\WEB\udas_config\src\components\cat.jpg" alt =""/> */}
            </a>

            

            {/* Перечисления */}
            <ol>
                <li>tttttt</li>
                <li>rrrrrr</li>   
            </ol> 
            
            {/* Кнопки */}
            <button>Button</button>

            <input type="button" value="testButton"/>

            <p style={{color: "cadetblue"}}>Text</p>

            {/* Таблица */}
            <table style={{color: "red"}}>
                <tr><td>A</td><td>B</td></tr>
                <tr><td>C </td><td>D</td></tr>
            </table>

            {/* Впадающий список */}
            <select style={{marginTop: 20}}>
                <option>City</option>
                <option>Village</option>
            </select>
            
            {/* Формы */}
            <form>
                <label for="pprrtt">Name</label>
                <input type="color" id="pprrtt"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <label for="name">Name: </label>
                <input type="text" id="name" placeholder="ФИО"></input>

                <label for ="email">Email: </label>
                <input type="email" id = "email" placeholder="name@domain.com"></input>
            </form>
            
            {/* Форма обратой связи */}
            {/* <div>
                <h2>Contact Us</h2>
                <label for="type">Type: </label>

                <select id="type">
                    <option>General</option>
                    <option>Payment Issue</option>
                    <option>Other</option>
                </select><br></br>

                <label for = "name">Name: </label>
                <input type = "text" id="name"></input> <br></br>

                <label for="message">Message: </label><br></br>
                <textarea></textarea><br></br>
                <input type = "button" value="Send"></input>
                <br></br>
            </div> */}

        </div>
    )
}

export default Test