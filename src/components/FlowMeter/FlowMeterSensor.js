import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table'

function FlowMeterSensor(props){

    let FM_A=3;
    let FM_B=4;
    let FM_C=34;
    let FM_D=19;
    let value=FM_A+FM_B/2*FM_D-FM_C+10;
    

    return(
        <div>
            <h3>Датчик скорости потока</h3>
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
                        <td width={400}>A</td>
                        <td width={400}><input id="FM_A" value={FM_A} type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="FM_B" value={FM_B} type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="FM_C" value={FM_C} type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="FM_D" value={FM_D} type={'number'}/></td>
                    </tr>
                </tbody>
            </Table>
            <br></br>
            Значение: {value}
            <br></br>
            <br></br>
            <Button>Установить</Button>
        </div>
    )
}

export default FlowMeterSensor