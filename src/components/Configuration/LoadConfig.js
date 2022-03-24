import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/esm/Button";

//const file = null;

function LoadConfig(props) {

    const fileRef = useRef()

    const handleChooseFile = async () => {
        console.log("file current:", fileRef.current)
        console.log("file:", fileRef.current.files[0])
        const file = fileRef.current.files[0]
        // const file = new Blob([new Uint8Array(fileRef.current.files[0])], { type: fileRef.current.files[0].type })
        const data = new FormData();
        data.append(file.name, file)


        await axios.post("/api/configuration/load/load", data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (

        <div>
            <br></br>
            <br></br>
            <label class="form-label" for="customFile"></label>
            <input type="file" class="form-control" id="customFile" />
            <br></br>
            <Button type="submit" onClick={handleChooseFile}>Загрузить новую конфигурацию</Button>
            <br></br>
            <br></br>
            <Button type="submit">Скачать текущую конфигурацию</Button>

        </div>
    )
}

export default LoadConfig