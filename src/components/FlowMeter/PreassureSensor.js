import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from "react-redux"
import logo from './preassure.png'
import { setPreassureA, setPreassureB, setPreassureC, setPreassureD } from '../../redux/flowMeter/preassureSensor/preassureSensorSlice';
import { getCoefPreassureMeter, setCoefPreassureMeter } from '../../API/flowMeter/preassureSensor';
import { useEffect } from 'react';

function PreassureSensor(props) {

    const dispatch = useDispatch();

    //получение данных с свервера с интервалом в 1 с
    useEffect(() => {
        const interval = setInterval(
            () =>
                dispatch(getCoefPreassureMeter()), 1000
        )
        return () => clearInterval(interval)
    }, [])

    const {
        PS_A,
        PS_B,
        PS_C,
        PS_D,
        value,
        preassure } = useSelector(state => state.flowMeter.preassureSensor);



    const handleSetK = () => {
        const data = {
            a: PS_A,
            b: PS_B,
            c: PS_C,
            d: PS_D,
        }
        dispatch(setCoefPreassureMeter(data))
    }


    return (
        <div>

            <img src={logo} width="100" alt="preassure"></img>
            <br></br>
            Давление: {preassure} Па
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
                        <td width={300}><input id="PS_A" value={PS_A} type={'number'}
                            onChange={(e) => dispatch(setPreassureA(e.target.value))} className='input' /></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="PS_B" value={PS_B} type={'number'}
                            onChange={(e) => dispatch(setPreassureB(e.target.value))} className='input' /></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="PS_C" value={PS_C} type={'number'}
                            onChange={(e) => dispatch(setPreassureC(e.target.value))} className='input' /></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="PS_D" value={PS_D} type={'number'}
                            onChange={(e) => dispatch(setPreassureD(e.target.value))} className='input' /></td>
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

export default PreassureSensor