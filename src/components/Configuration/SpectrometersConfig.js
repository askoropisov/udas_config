import { useSelector } from "react-redux"

function SpectrometersConfig(props) {

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
                    порт: {primaryPort}
                    <br></br> <br></br>
                    <h3>Время жизни частиц:</h3>
                    Альфа: {primaryA} <br></br>
                    Бета: {primaryB} <br></br>
                    Радон: {primaryRn} <br></br>
                </div>
                <div>
                    <h3>Фоновый</h3> 
                    порт: {backPort}
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