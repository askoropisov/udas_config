import logo from './term3.png'
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getTemperature } from '../../API/flowMeter/temperature';

function TemperatureSensor(props){


    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(
            () =>
                dispatch(getTemperature()), 1000
        )
        return () => clearInterval(interval)
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