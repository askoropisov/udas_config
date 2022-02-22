function TemperatureSensor(props){

    var temperatur = 27;
    return(

        <div>
            <h3>Датчик температуры</h3>
            <div >
                <br></br>
                <br></br>
                Температура: {temperatur}°С
            </div>
        </div>
    )
}

export default TemperatureSensor