import { useDispatch, useSelector } from "react-redux"

import Button from 'react-bootstrap/esm/Button';
import { setIsOpenFlapAsync } from '../../API/flowMeter/flap';

function Flap(props) {

    const { isOpen } = useSelector(state => state.flowMeter.flap)
    const dispatch = useDispatch()

    var statusWord;
    if (isOpen === true) statusWord = "открыта"
    else statusWord = "закрыта";

    return (

        <div>


            <h4>Статус:</h4> Заслонка {statusWord}
            <br></br>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button disabled={isOpen} onClick={() => dispatch(setIsOpenFlapAsync(true))}>Открыть</Button>

                <Button disabled={!isOpen} onClick={() => dispatch(setIsOpenFlapAsync(false))}>Закрыть</Button>

            </div>
        </div>
    )
}

export default Flap