import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPolynom, setCoefGrad } from "../../API/flowMeter/graduation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PointForm from "../Controls/PointForm"

function Graduation(props) {

    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(1)
    const [plot, setPlot] = useState(false)
    const { polynom,
        Ka,
        Kb,
        Kc,
        Kd } = useSelector(state => state.flowMeter.graduation)

    //запрос обработки введенных значений 
    const handlePostPoints = async () => {
        dispatch(getPolynom())
        setPlot(true)
    }

    //очистка введенных данных и повтор ввода с 1 точки
    const handleNullGrad = async () => {
        await axios.post("/api/flowmeter/grad/clear")
            .then(res => console.log("points delete", res))
            .catch(err => console.log("Error", err))
        setCurrentId(1);
        setPlot(false)
        setCoefGrad(0)
    }

    //переход к вводу значний для следующей точки
    const handleSendForm = async (data) => {
        console.log(data)
        dispatch(setCoefGrad(data))
        setCurrentId(prev => prev + 1)
    }


    //вывод полученных коэф-ов и полинома
    const renderLineChart = (
        <div>
            <div>
                <h3>Полученные коэффициенты</h3>
                <br></br>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <div> A:  {Ka.toExponential(6)} </div>
                    <div> B:  {Kb.toExponential(6)}  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <div> C:  {Kc.toExponential(6)}  </div>
                    <div> D:  {Kd.toExponential(6)}  </div>
                </div>
                <br></br>
            </div>
            {/* График, полученный с помощью Recharts библиотеки */}
            <div style={{ width: '100%', height: "52vh", maxWidth: "100%" }}>
                <ResponsiveContainer >
                    <LineChart data={polynom}
                        margin={{ top: 5, right: 0, bottom: 10, left: 25 }}>
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

    const writeForm = (
        <div>
            <div id="forms">
                <PointForm
                    id={currentId}
                    key={"param#" + currentId}
                    // Функция, вызывыемая в Point
                    setNextForm={(data) => handleSendForm(data)}/>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 30 }}>
                {/* запуск градуировки */}
                <Button onClick={(data) => handlePostPoints(data)} disabled={currentId<5}>Закончить ввод</Button>
                <Button onClick={handleNullGrad}>Начать заново</Button>
            </div>
        </div>
    );

    return (
        <div >
            {plot === true ? renderLineChart : writeForm}
        </div>
    )
}

export default Graduation