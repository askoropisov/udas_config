import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getEscale } from "../../API/configuration/Escale";

function EScaleConfig(prop) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEscale())
            
    }, [])

    const {
        Peak356,
        Peak81,
        Range,
        Duration,
        S0,
        S1,
        S2 } = useSelector(state=>state.configuration.escale)



    return (
        <div>
            <h3>Энергетическая калибровка</h3>
            <div >
                <br></br>
                <div>
                    Продолжительность: {Duration.hours}:{Duration.minutes}:{Duration.seconds} <br></br>
                    Диапазон: левое значение: {Range}, правое значение: {Range} <br></br>
                    Пик-356: {Peak356} <br></br>
                    Пик-81: {Peak81} <br></br>
                </div>
                <br></br>
                <div >
                    S0: {S0} <br></br>
                    S1: {S1} <br></br>
                    S2: {S2} <br></br>
                </div>
            </div>
        </div>
    )
}

export default EScaleConfig