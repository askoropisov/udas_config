function OneSpectrometr(props){

    var type=props.type;
    var port=props.port;
    var Alpha = props.Alpha;
    var Beta=props.Beta;
    var Rn=props.Rn;
    
    return(
        <div>
            <h3>{type}</h3>
            <h4>Порт: {port}</h4>
            <br></br>
            <h3>Время смерти:</h3>
            <h4>Альфа: {Alpha}</h4>
            <h4>Бета: {Beta}</h4>
            <h4>Радон: {Rn}</h4>
        </div>
    )
}

export default OneSpectrometr