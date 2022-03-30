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

    const LoadHandle = async () => {
        return await axios.get("/api/configuration/load/downloaded")
            .then(res => {
                console.log("downloaded:", res)
                var name = new Date();
                var datename =  name.getFullYear()+' '+name.getMonth()+' '+name.getDay()

                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Config '+ datename);
                document.body.appendChild(link);
                link.click();
            })
            .catch(err => console.log("Not downloaded:", err))
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
            <Button type="submit" onClick={LoadHandle}>Скачать текущую конфигурацию</Button>

        </div>
    )
}

export default LoadConfig