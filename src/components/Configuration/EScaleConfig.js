function EScaleConfig(prop) {

    var duration = "00:00:30";
    var range = 0;
    var peak1 = 133;
    var peak2 = 432;

    var s0 = 2;
    var s1 = 1.2;
    var s2 = 0;

    return (
        <div>
            <h3>Энергетическая калибровка</h3>
            <div >
                <br></br>
                <div>
                    Продолжительность: {duration} <br></br>
                    Диапазон: {range} <br></br>
                    Пик-83: {peak1}<br></br>
                    Пик-356: {peak2}<br></br>
                </div>
                <br></br>
                <div >
                    S0: {s0} <br></br>
                    S1: {s1} <br></br>
                    S2: {s2} <br></br>
                </div>
            </div>
        </div>
    )
}

export default EScaleConfig