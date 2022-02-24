import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Flap(props) {

    const[status, SetStatus]=useState(false);

    var statusWord;
    if (status === true) statusWord = "открыта"
    else statusWord = "закрыта";

    return (

        <div>


            <h4>Статус:</h4> Заслонка {statusWord}
            <br></br>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button disabled={status} onClick={() => SetStatus(true)}>Открыть</Button>
                
                <Button disabled={!status} onClick={() => SetStatus(false)}>Закрыть</Button>
            </div>
        </div>
    )
}

export default Flap