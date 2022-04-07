import { useDispatch, useSelector } from "react-redux"
import close from './flap_close.png'
import open from './flap_open.png'

import Button from 'react-bootstrap/esm/Button';
import { setIsOpenFlapAsync } from '../../API/flowMeter/flap';

function Flap(props) {

    const dispatch = useDispatch();

    var image = close

    const { isOpen } = useSelector(state => state.flowMeter.flap)
    var statusWord;
    if (isOpen === true)
    { 
        statusWord = "открыта"
        image = open
    }
    else {
        statusWord = "закрыта";
        image = close
    }

    return (

        <div>

            <h4>Статус:</h4> Заслонка {statusWord}
            <br></br>
            <br></br>

            <img src ={image} width="100" alt= "flap status"/>

            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button disabled={isOpen} onClick={() => dispatch(setIsOpenFlapAsync(true))}>Открыть</Button>

                <Button disabled={!isOpen} onClick={() => dispatch(setIsOpenFlapAsync(false))}>Закрыть</Button>

            </div>
        </div>
    )
}

export default Flap