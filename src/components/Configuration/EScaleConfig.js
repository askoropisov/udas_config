import { useSelector } from "react-redux"

function EScaleConfig(prop) {

    const {
        Peak356,
        Peak81,
        Range,
        S0,
        S1,
        S2 } = useSelector(state=>state.configuration.escale)

    return (
        <div>
            <div >
                <br></br>
                <div>
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