
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { getACP } from "../../API/flowMeter/graduation";
import { setCoefK, setCoeft, setCoefV1a, setCoefV1b } from "../../redux/flowMeter/graduation/graduationSlice";
import Timer from "./Stopwatch";


function PointForm(props) {

    const dispatch = useDispatch();

    const {
        K,
        t,
        V1a,
        V1b
    } = useSelector(state => state.flowMeter.graduation)

    const getData = () => {
        return (
            {
                acPnumber: K, 
                measureRange: t,
                startValue: V1a,
                stopValue: V1b
            }
        )
    }

    const handleTime = (data) => {
        dispatch(setCoeft(data))
    }

    const handleACP = async () => {
        setCoefK(dispatch(getACP()))
    }

    return (
        <div>
            <h3>Введите значения точки №{props.id}</h3>
            <div >
                <div>
                    <label htmlFor="K">Показание АЦП</label> <br></br>
                    <input className='input' type="number" id="K" value={K} onChange={(e) => dispatch(setCoefK(e.target.value))} 
                           style={{width: "38%"}}/>
                    <br></br>
                    <Button onClick={handleACP}>Получить</Button>
                </div>
                <div>   
                    <label>Время измерения</label> <br></br>              
                    <Timer
                        getTime = {(data)=> handleTime(data)}></Timer>
                </div>
                <div>
                    <label htmlFor="V1a">Начальное значение</label> <br></br>
                    <input className='input' type="number" id="V1a" value={V1a} onChange={(e) => dispatch(setCoefV1a(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="V1b">Конечное значение</label> <br></br>
                    <input className='input' type="number" id="V1b" value={V1b} onChange={(e) => dispatch(setCoefV1b(e.target.value))} />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 30 }}>
                    <Button onClick={(data) => props.setNextForm(getData(data))}>Следующая точка</Button>
                </div>
            </div>
        </div>
    )
}

export default PointForm