import Table from 'react-bootstrap/Table'

function PressureSensor(props){

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
                        <td width={400}><input id="PS_A" type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input id="PS_B" type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input id="PS_C" type={'number'}/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input id="PS_D" type={'number'}/></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PressureSensor