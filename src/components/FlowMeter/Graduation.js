import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { getPolynom, setCoefGrad } from "../../API/flowMeter/graduation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import PointForm from "../Controls/PointForm"

function Graduation(props) {
    
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(1)
    const [datas, setDatas] = useState([])
    const [plot, setPlot] = useState(false)

    useEffect(() => {
        setDatas(new Array(100).fill(0).map((data, index) => {
            return ({
                Activity: index + 1,
                Энергия: (Math.random() * 1000).toFixed(0)
            })         
        }))
    }, [])

    const handlePostPoints = async () => {
        // await axios.post("/api/flowmeter/grad/graduation")
        //     .then(res => console.log("start graduation", res))
        //     .catch(err => console.log("Error", err))
        setDatas(getPolynom())
        setPlot(true)
        dispatch(getPolynom())
    }

    const handleNullGrad = async () => {
        // await axios.post("/api/flowmeter/grad/clear")
        //     .then(res => console.log("points delete", res))
        //     .catch(err => console.log("Error", err))
        setCurrentId(1);
        setPlot(false)
    }

    const handleSendForm = async (data) => {
        console.log(data)
        dispatch(setCoefGrad(data))
        setCurrentId(prev => prev + 1)
    }

    const renderLineChart = (
        <div style={{ width: '100%', height:"50vh", maxWidth:"100%" }}>
            <ResponsiveContainer >
                <LineChart data={datas}
                    margin={{ top: 5, right: 30, bottom: 10, left: 15 }}>
                    <Line type="monotone" dataKey="Энергия" stroke="#12bf51" animateNewValues={false} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="Activity" fontSize={16} />
                    <YAxis/>
                    <Legend />
                    <Tooltip animationDuration={0}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

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
            <div >
                <br></br>
                {plot === true ? renderLineChart : null}
            </div>
        </div>
    )
}

export default Graduation