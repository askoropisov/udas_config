import { useState } from 'react';

function EScaleConfig(prop) {


    const [duration, SetDuration] = useState("00:00:40")
    const [ range, SetRange ] = useState(0);
    const [ peak1, SetPeak1 ] = useState(133);
    const [ peak2, SetPeak ] = useState(432);

    const[ s0, SetS0] = useState(2);
    const[ s1, SetS1] = useState(1.2);
    const[ s2, SetS2] = useState(0);

    return (
        <div>
            <h3>Энергетичес, SetSалибровка</h3>
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