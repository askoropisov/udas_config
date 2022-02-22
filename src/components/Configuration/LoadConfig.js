import Button from "react-bootstrap/esm/Button";

function LoadConfig(props){

    return(

        <div>
            <br></br>
            <br></br>
            <label class="form-label" for="customFile"></label>
            <input type="file" class="form-control" id="customFile" />
            <br></br>
            <Button>Загрузить конфигурацию</Button>
            <br></br>
            <br></br>
            <Button>Выгрузить конфигурацию</Button>

        </div>
    )
}

export default LoadConfig