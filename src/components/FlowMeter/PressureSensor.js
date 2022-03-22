import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import logo from './preassure.png'

function PressureSensor(props){

    const[PS_A, SetPS_A]=useState(0);
    const[PS_B, SetPS_B]=useState(0);
    const[PS_C, SetPS_C]=useState(0);
    const[PS_D, SetPS_D]=useState(0);

    const[preassure, SetPreassure]=useState(95);
    const[value, SetValue]=useState(45);


    return(
        <div>
            
            <img src={logo} width="100" alt ="temperature"></img>
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
                        <td width={300}><input id="PS_A" Value={PS_A} type={'number'}
                            onChange={(e) => SetPS_A(e.target.value)} className='input'/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="PS_B" Value={PS_B}  type={'number'}
                             onChange={(e) => SetPS_B(e.target.value)} className='input'/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="PS_C" Value={PS_C}  type={'number'}
                             onChange={(e) => SetPS_C(e.target.value)} className='input'/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="PS_D" Value={PS_D} type={'number'}
                             onChange={(e) => SetPS_D(e.target.value)} className='input'/></td>
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

export default PressureSensor