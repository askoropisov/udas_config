import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { nullGraduation, setCoefGrad, setGraduation } from "../../API/flowMeter/graduation";
import PointForm from "../Controls/PointForm"

function Graduation(props) {

    const [currentId, setCurrentId] = useState(1)

    const dispatch = useDispatch()

    const handlePostPoints = (data) => {
        const forms = document.getElementById("forms").children
        console.log(forms)
        dispatch(setGraduation)
    }

    const handleNullGrad = () => {
        dispatch(nullGraduation)
        setCurrentId(1);
    }

    const handleSendForm = async (data) => {
        console.log(data)
        dispatch(setCoefGrad(data))
        setCurrentId(prev => prev + 1)
    }

    return (
        <div>
            <div id="forms">
                <PointForm
                    id={currentId}
                    key={"param#" + currentId}
                    setNextForm={(data) => handleSendForm(data)}
                />


            </div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 30 }}>               
                <Button onClick={(data)=>handlePostPoints(data)}>Закончить ввод</Button>
                <Button onClick={handleNullGrad}>Начать заново</Button>
            </div>
        </div>
    )
}

export default Graduation