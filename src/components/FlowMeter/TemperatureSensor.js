import logo from './term3.png'
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllFlowMeter } from '../../API/flowMeter/generalFlowMeter';

function TemperatureSensor(props){


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFlowMeter())
            
    }, [])
    

    const {temperature} = useSelector(state=>state.flowMeter.temperature)

    return(

        <div>
            <div >
                <br></br>
                <br></br>
                Температура: {temperature} °С  <img src={logo} width="45" alt ="temperature"></img>
                
            </div>
        </div>
    )
}

export default TemperatureSensor