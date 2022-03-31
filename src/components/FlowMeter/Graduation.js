import { dispatch } from "d3";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { setCoefGrad } from "../../API/flowMeter/graduation";
import PointForm from "../Controls/PointForm"

function Graduation(props) {


    const [count, setCount] = useState(0)
    const [isInputForm, setIsInputForm] = useState(false)
    const [points, setPoints] = useState([])

    const ppp = Array(count).fill(1).map((item, index) =>
        <PointForm id={index + 1} key={"param#" + index} getData={(data) => { setPoints(prev => [...prev, { data }]) }} />
    )


    const onChangehandle = (e) => {
        const value = Number(e.target.value)
        if (value >= 0) {
            setCount(value)
        }
    }


    useEffect(() => {
        console.log("points:", points)
        console.log(count)
        console.log(new Array(count).fill(1))


    }, [count])

    const handlePostPoints = () => {
        const forms = document.getElementById("forms").children
        console.log(forms)
        // dispatch(setCoefGrad(points))
    }


    return (
        <div>

            <div>
                <br></br>
                <label for="counterPoint">Введите количество точек для градуировки </label> <br></br>
                <input className='input' type="number" id="counterPoint" value={count} onChange={onChangehandle} />
                <br></br>
                <br></br>
                <Button onClick={() => setIsInputForm(true)}>Ввести значения</Button>
                <br></br>
                <Button onClick={() => setCount(0)}>Очистить</Button>
            </div>

            <div id="forms">
                {isInputForm ?
                    ppp
                    :
                    null
                }
            </div>
            <div>

                <Button onClick={handlePostPoints}>Вычислить коэффициенты</Button>
            </div>
        </div>
    )
}

export default Graduation