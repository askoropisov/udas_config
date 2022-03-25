import { useDispatch} from "react-redux"
import { useEffect } from 'react';
import FlowMeterMenu from '../Controls/FlowMeterMenu'
import { getAllFlowMeter } from "../../API/flowMeter/generalFlowMeter";




function FlowMeter(props){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFlowMeter())
            
    }, [])

    return(
        <div>
            <h2>Расходомер</h2>
            <br></br>
            <FlowMeterMenu/>
        </div>
    )
}

export default FlowMeter