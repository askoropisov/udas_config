import Button from "react-bootstrap/esm/Button";

const file = null;

function LoadConfig(props){

    return(

        <div>
            <br></br>
            <br></br>
            <label class="form-label" for="customFile"></label>
            <input type="file" class="form-control" id="customFile"/>
            <br></br>
            <Button type="submit">Загрузить новую конфигурацию</Button>
            <br></br>
            <br></br>
            <Button type="submit">Скачать текущую конфигурацию</Button>

        </div>
    )
}

export default LoadConfig