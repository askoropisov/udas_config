import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { setCoefGrad } from "../../API/flowMeter/graduation";
import PointForm from "../Controls/PointForm"

function Graduation(props) {
    
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(1)

    const handlePostPoints = async () => {
        await axios.post("/api/flowmeter/grad/graduation")
            .then(res => console.log("start graduation", res))
            .catch(err => console.log("Error", err))
    }

    const handleNullGrad = async () => {
        await axios.post("/api/flowmeter/grad/clear")
            .then(res => console.log("points delete", res))
            .catch(err => console.log("Error", err))
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