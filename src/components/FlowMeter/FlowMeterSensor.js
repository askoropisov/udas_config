import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table'
import { useState } from 'react';
import logo from './flowmeter.png'

function FlowMeterSensor(props){
 
    const[FM_A, SetFM_A]=useState(0);
    const[FM_B, SetFM_B]=useState(0);
    const[FM_C, SetFM_C]=useState(0);
    const[FM_D, SetFM_D]=useState(0);
    
    
    const[value, SetValue]=useState(12);
    
    return(
        <div>

            <img src={logo} width="130" alt ="flowmeter"></img>
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
                        <td width={300}><input id="FM_A" Value={FM_A} type={'number'}
                            className='input' onChange={(e) => SetFM_A(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="FM_B" Value={FM_B} type={'number'}
                             className='input' onChange={(e) => SetFM_B(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="FM_C" Value={FM_C} type={'number'}
                             className='input' onChange={(e) => SetFM_C(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="FM_D" Value={FM_D} type={'number'}
                             className='input' onChange={(e) => SetFM_D(e.target.value)}/></td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            Значение: {value}
            <br></br>
            <Button>Установить</Button>
        </div>
    )
}

export default FlowMeterSensor