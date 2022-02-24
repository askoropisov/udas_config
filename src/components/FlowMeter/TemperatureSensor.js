import { useState } from "react"

function TemperatureSensor(props){

    const[temperature, SetTemperature] = useState(27);

    return(

        <div>
            <div >
                <br></br>
                <br></br>
                Температура: {temperature}°С
            </div>
        </div>
    )
}

export default TemperatureSensor