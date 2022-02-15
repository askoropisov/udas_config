import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button';

function PressureSensor(props){

    let PS_A=13;
    let PS_B=-4;
    var PS_C=29.7;
    let PS_D=1;
    let value=PS_A+PS_B/2*PS_D-PS_C;

    return(
        <div>
            <h3>Датчик давления</h3>
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
                        <td width={400}><input id="PS_A" defaultValue={PS_A} type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="PS_B" defaultValue={PS_B}  type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="PS_C" defaultValue={PS_C}  type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="PS_D" defaultValue={PS_D} type={'number'}/></td>
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

export default PressureSensor