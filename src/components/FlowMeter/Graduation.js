import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPolynom, setCoefGrad } from "../../API/flowMeter/graduation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PointForm from "../Controls/PointForm"
import Stopwatch from "../Controls/Stopwatch";
import Timer from "../Controls/Stopwatch";

function Graduation(props) {

    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(1)
    const [plot, setPlot] = useState(false)
    const { polynom,
            Ka,
            Kb,
            Kc,
            Kd } = useSelector(state => state.flowMeter.graduation)

    const handlePostPoints = async () => {
        dispatch(getPolynom())
        setPlot(true)
    }

    const handleNullGrad = async () => {
        await axios.post("/api/flowmeter/grad/clear")
            .then(res => console.log("points delete", res))
            .catch(err => console.log("Error", err))
        setCurrentId(1);
        setPlot(false)
    }

    const handleSendForm = async (data) => {
        console.log(data)
        dispatch(setCoefGrad(data))
        setCurrentId(prev => prev + 1)
    }

    const renderLineChart = (
        <div>
            <div>
                <h3>Полученные коэффициенты</h3>
                <br></br>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <div> A:  {Ka}  </div>
                    <div> B:  {Kb}  </div> 
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <div> C:  {Kc}  </div>
                    <div> D:  {Kd}  </div> 
                </div>
                <br></br>
            </div>
            <div style={{ width: '100%', height: "52vh", maxWidth: "100%" }}>
                <ResponsiveContainer >
                    <LineChart data={polynom}
                        margin={{ top: 5, right: 30, bottom: 10, left: 15 }}>
                        <Line type="monotone" dataKey="Энергия" stroke="#12bf51" animateNewValues={false} />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="Activity" fontSize={16} />
                        <YAxis />
                        <Legend />
                        <Tooltip animationDuration={0} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    return (
        <div>
            <div >
                {plot === true ? renderLineChart : null}
            </div>
            <div id="forms">
                <PointForm
                    id={currentId}
                    key={"param#" + currentId}
                    setNextForm={(data) => handleSendForm(data)}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 30 }}>
                <Button onClick={(data) => handlePostPoints(data)}>Закончить ввод</Button>
                <Button onClick={handleNullGrad}>Начать заново</Button>
            </div>
        </div>
    )
}

export default Graduation