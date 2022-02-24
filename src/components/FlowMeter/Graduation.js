import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import PointForm from "../Controls/PointForm"

function Graduation(props) {

    const [count, setCount] = useState(0)
    const [isInputForm, setIsInputForm] = useState(false)

    const onChangehandle = (e) => {
        const value = Number(e.target.value)
        if(value>=0) setCount(value)
        
    }

    const getData = () => {
        console.log("GetData parent")
    }

    useEffect(() => {
        console.log(count)
        console.log(new Array(count).fill(1))
    }, [count])


    return (

        <div>

            <div>
                <br></br>
                <label for="counterPoint">Введите количество точек для градуировки </label> <br></br>
                <input className='input' type="number" id="counterPoint" value={count} onChange={onChangehandle} />
            </div>
            <Button onClick={() => setIsInputForm(true)}>Ввести значения</Button>

            {isInputForm ?
                Array(count).fill(1).map((item, index) =>
                    <PointForm id={index + 1} key={"param#" + index} getData={getData} />
                )
                : null
            }
            <br></br>
            <Button>Вычислить коэффициенты</Button>

        </div>
    )
}

export default Graduation