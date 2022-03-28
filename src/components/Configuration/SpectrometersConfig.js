import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getAllConfiguration } from "../../API/configuration/generalConfiguration";

function SpectrometersConfig(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllConfiguration())
            
    }, [])

    const {
        primaryPort,
        backPort,
        primaryA,
        primaryB,
        primaryRn,
        backA,
        backB,
        backRn
    } = useSelector(state=>state.configuration.spectrometers)


    return (
        <div>
            <h3>Датчики</h3>
            <br></br>
            <div style={{display:'flex', justifyContent:"space-around",}}>
                <div>
                    <h3>Основной</h3>
                    Порт: {primaryPort}
                    <br></br> <br></br>
                    <h3>Время жизни частиц:</h3>
                    Альфа: {primaryA} <br></br>
                    Бета: {primaryB} <br></br>
                    Радон: {primaryRn} <br></br>
                </div>
                <div>
                    <h3>Фоновый</h3> 
                    Порт: {backPort}
                    <br></br> <br></br>
                    <h3>Время жизни частиц:</h3>
                    Альфа: {backA} <br></br>
                    Бета: {backB} <br></br>
                    Радон: {backRn} <br></br>
                </div>

            </div>
        </div>
    )
}


export default SpectrometersConfig