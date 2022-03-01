import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function CurrentLoops(props){

    const[status, SetStatus]=useState(false);

    var statusWord;
    if (status === true) statusWord = "включены"
    else statusWord = "выключены";

    return(

        <div>
            <h3>Токовые петли</h3>
            
            <h4>Статус:</h4> Токовые петли {statusWord}
            <br></br>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button disabled={status} onClick={() => SetStatus(true)}>Включить</Button>
                
                <Button disabled={!status} onClick={() => SetStatus(false)}>Выключить</Button>

            </div>

        </div>
    )
}

export default CurrentLoops