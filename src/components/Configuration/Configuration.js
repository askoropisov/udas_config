import { useDispatch} from "react-redux"
import { useEffect } from 'react';
import ConfigurationMenu from "../Controls/ConfigurationMenu"
import { getAllConfiguration } from "../../API/configuration/generalConfiguration";

function Configuration(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllConfiguration())
    }, [])

    return (
        <div>
            <h2>Конфигурация</h2>
            <br></br>
            <ConfigurationMenu/>
        </div>
    )
}

export default Configuration