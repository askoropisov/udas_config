function EScaleConfig(prop){

var duration = "00:00:30";
var range = 0;
var peak1=133;
var peak2=432;

    return(
        <div>
            <h3>EScale</h3>
            <br></br>
            <div>
                Продолжительность: {duration} <br></br>
                Диапазон: {range} <br></br>
                Пик-83: {peak1}<br></br>
                Пик-356: {peak2}<br></br>
            </div>
        </div>
    )
}

export default EScaleConfig