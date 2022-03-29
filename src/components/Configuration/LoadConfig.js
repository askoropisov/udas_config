import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";


function LoadConfig(props) {
    const [currFile, setCurrFile] = useState(null)

    const clickHandle = async (file) => {
        const data = new FormData();

        var files = currFile.target.files
        console.log(files);

        data.append(files[0].name, files[0])

        await axios.post("/api/configuration/load/load", data)
            .then(res => console.log("uploaded:", res))
            .catch(err => console.log("Not uploaded:", err))
    }


    return (

        <div>
            <br></br>
            <br></br>
            <label class="form-label" for="customFile"></label>
            <input type="file" class="form-control" id="customFile" onChange={setCurrFile} />
            <br></br>
            <Button type="submit" onClick={clickHandle}>Загрузить новую конфигурацию</Button>
            <br></br>
            <br></br>
            <Button type="submit">Скачать текущую конфигурацию</Button>

        </div>
    )
}

export default LoadConfig