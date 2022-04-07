import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/esm/Button';
import { setIsOpenLoopsAsync } from "../../API/configuration/currentLoops";

function CurrentLoops(props){

    const dispatch = useDispatch();

    const {isOpenLoops} = useSelector(state=>state.configuration.currentloops)

    var statusWord;
    if (isOpenLoops === true) statusWord = "включены"
    else statusWord = "выключены";

    return(
        <div>
            <h4>Статус:</h4> Токовые петли {statusWord}
            <br></br>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button disabled={isOpenLoops} onClick={() => dispatch(setIsOpenLoopsAsync(true))}>Включить</Button>
                <Button disabled={!isOpenLoops} onClick={() =>  dispatch(setIsOpenLoopsAsync(false))}>Выключить</Button>
            </div>
        </div>
    )
}

export default CurrentLoops