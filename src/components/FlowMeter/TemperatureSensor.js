import { useSelector } from "react-redux"
import logo from './term3.png'

function TemperatureSensor(props){

    const {temperature} = useSelector(state=>state.flowMeter.temperature)

    return(

        <div>
            <div >
                <br></br>
                <br></br>
                Температура: {temperature}°С  <img src={logo} width="45" alt ="temperature"></img>
                
            </div>
        </div>
    )
}

export default TemperatureSensor