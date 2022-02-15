function OneSpectrometr(props){

    var type=props.type;
    var port=props.port;
    var Alpha = props.Alpha;
    var Beta=props.Beta;
    var Rn=props.Rn;
    
    return(
        <div>
            <h3>{type}</h3>
            Порт: {port}
            <br></br>
            <br></br>
            <h3>Время смерти:</h3>
            Альфа: {Alpha} <br></br>
            Бета: {Beta}<br></br>
            Радон: {Rn}<br></br>
        </div>
    )
}

export default OneSpectrometr