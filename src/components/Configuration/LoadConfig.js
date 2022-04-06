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
        return await axios.post("/api/configuration/load/downloading")
            .then(res => {
                console.log("downloaded:", res)
                var name = new Date();
                var datename =  name.getFullYear()+'_'+(name.getMonth()+1)+'_'+name.getDate()+'_'+name.getHours()+':'+name.getMinutes();

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

            <form action="" method="post" encType="multipart/form-data">
            	<label>Скачайте текущую конфигурацию или загрузите новую</label>
                <br></br>
                <br></br>
            	<input type="file" name="file" className="form-control" accept=".txt,.json" onChange={setCurrFile}/>
            </form>

            <br></br>
            <Button type="submit" onClick={clickHandle}>Загрузить новую конфигурацию</Button>
            <br></br>
            <br></br>
            <Button type="submit" onClick={LoadHandle}>Скачать текущую конфигурацию</Button>

        </div>
    )
}

export default LoadConfig