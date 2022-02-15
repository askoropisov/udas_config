import Button from "react-bootstrap/esm/Button";

function LoadConfig(props){

    return(

        <div>
            <br></br>
            <br></br>
            <label class="form-label" for="customFile"></label>
            <input type="file" class="form-control" id="customFile" />
            <Button>Загрузить конфигурацию</Button>
        </div>
    )
}

export default LoadConfig