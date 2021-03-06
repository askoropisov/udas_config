import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from "react-redux"
import logo from './flowmeter.png'
import { useEffect } from 'react';

import { getCoefFlowMeter, setCoefFlowMeter } from '../../API/flowMeter/flowMeterSensor'
import { setFlowA, setFlowB, setFlowC, setFlowD } from '../../redux/flowMeter/flowMeterSensor/flowMeterSlice';


function FlowMeterSensor(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(
            () =>
                dispatch(getCoefFlowMeter()), 1000
        )
        return () => clearInterval(interval)
    }, [])

    const {
        FM_A,
        FM_B,
        FM_C,
        FM_D,
        value,
        flow } = useSelector(state => state.flowMeter.flowMeterSensor);


    const handleSetK = () => {
        const data = {
            a: FM_A,
            b: FM_B,
            c: FM_C,
            d: FM_D,
        }
        dispatch(setCoefFlowMeter(data))
    }

    return (
        <div>

            <img src={logo} width="100" alt="flowmeter"></img>
            <br></br>
            Скорость потока: {flow} л/мин
            <br></br>
            <br></br>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Коэффициент</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width={200}>A</td>
                        <td width={300}><input id="FM_A" value={FM_A.toExponential()} type={'number'}
                            className='input' onChange={(e) => dispatch(setFlowA(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="FM_B" value={FM_B.toExponential()} type={'number'}
                            className='input' onChange={(e) => dispatch(setFlowB(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="FM_C" value={FM_C.toExponential()} type={'number'}
                            className='input' onChange={(e) => dispatch(setFlowC(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="FM_D" value={FM_D.toExponential()} type={'number'}
                            className='input' onChange={(e) => dispatch(setFlowD(e.target.value))} /></td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            Значение: {value}
            <br></br>
            <Button onClick={handleSetK}>Установить</Button>
        </div>
    )
}

export default FlowMeterSensor